import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Development-only middleware to emulate the /api/ai/chat serverless endpoint locally.
function cloudflareAIProxyPlugin(env) {
  const accountId = env.CF_ACCOUNT_ID
  const token = env.CF_AI_TOKEN
  const model = env.CF_MODEL || '@cf/meta/llama-3.1-8b-instruct-fast'

  return {
    name: 'cloudflare-ai-proxy-dev',
    configureServer(server) {
      server.middlewares.use('/api/ai/chat', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }
        if (!accountId || !token) {
          res.statusCode = 500
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ error: 'Missing Cloudflare AI credentials (CF_ACCOUNT_ID / CF_AI_TOKEN)' }))
          return
        }

        // Read body
        let raw = ''
        try {
          raw = await new Promise((resolve, reject) => {
            let data = ''
            req.on('data', c => { data += c })
            req.on('end', () => resolve(data))
            req.on('error', reject)
          })
        } catch (e) {
          res.statusCode = 400
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Failed to read request body', detail: String(e.message || e) }))
          return
        }

        let body
        try {
          body = raw ? JSON.parse(raw) : {}
        } catch (e) {
          res.statusCode = 400
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Invalid JSON body' }))
          return
        }

        const messages = Array.isArray(body?.messages) ? body.messages : []
        if (!messages.length) {
          res.statusCode = 400
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Missing messages array' }))
          return
        }

        const prompt = messages.map(m => `${(m.role || 'user').toUpperCase()}: ${m.content}`).join('\n') + '\nASSISTANT:'

  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${model}`

        try {
          const fetchImpl = globalThis.fetch || (await import('node-fetch').then(m => m.default))
          async function callWorkers(body) {
            return fetchImpl(url, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(body)
            })
          }
          console.log('[AI][dev-mw] inbound messages count=', messages.length)
          let upstream = await callWorkers({ prompt })
          if (upstream.status === 400) {
            console.log('[AI][dev-mw] prompt variant 400, retry messages')
            upstream = await callWorkers({ messages })
            if (upstream.status === 400) {
              console.log('[AI][dev-mw] messages variant 400, retry input')
              upstream = await callWorkers({ input: prompt })
            }
          }

          const text = await upstream.text()
          if (upstream.status !== 200) {
            console.log('[AI][dev-mw] upstream error status', upstream.status, text.slice(0,300))
          }
          res.statusCode = upstream.status
          res.setHeader('content-type', upstream.headers.get?.('content-type') || 'application/json')
          res.end(text)
        } catch (err) {
          res.statusCode = 502
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Upstream request failed', detail: String(err.message || err) }))
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env variables for both dev and build time
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), cloudflareAIProxyPlugin(env)],
    server: {},
  }
})
