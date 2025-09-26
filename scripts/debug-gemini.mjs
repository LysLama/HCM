#!/usr/bin/env node
// Debug Gemini API from Node.js with rich logs
// Usage:
//   npm run debug:gemini -- "Triết học là gì?" --model gemini-2.5-flash

import fs from 'node:fs'
import path from 'node:path'

// Try to load API key from environment, else parse .env
function loadApiKey() {
  const fromEnv = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY
  if (fromEnv) return fromEnv
  try {
    const envPath = path.join(process.cwd(), '.env')
    const raw = fs.readFileSync(envPath, 'utf8')
    const match = raw.match(/^\s*VITE_GEMINI_API_KEY\s*=\s*(.+)\s*$/m)
    if (match) return match[1].trim()
  } catch {}
  return null
}

function parseArgs(argv) {
  const args = { prompt: 'Hello, this is a test message.', model: 'gemini-2.5-flash' }
  const extras = []
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--model' && argv[i + 1]) { args.model = argv[++i]; continue }
    if (a === '--json' && argv[i + 1]) { try { args.prompt = JSON.parse(argv[++i]) } catch { args.prompt = argv[i] } continue }
    if (!a.startsWith('--') && !args._promptSet) { args.prompt = a; args._promptSet = true; continue }
    extras.push(a)
  }
  args._extras = extras
  return args
}

async function main() {
  const apiKey = loadApiKey()
  const { prompt, model } = parseArgs(process.argv)

  console.log('--- Gemini Debug ---')
  console.log('Model     :', model)
  console.log('API Key   :', apiKey ? `(set, ${apiKey.length} chars)` : 'MISSING')
  console.log('Prompt    :', prompt)

  if (!apiKey) {
    console.error('ERROR: Missing API key. Set VITE_GEMINI_API_KEY in .env or env vars.')
    process.exitCode = 1
    return
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`
  const body = {
    contents: [{ parts: [{ text: String(prompt) }]}],
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify(body),
    })

    console.log('\nStatus    :', res.status, res.statusText)
    const text = await res.text()
    const ct = res.headers.get('content-type') || ''
    console.log('CT        :', ct)
    if (!res.ok) {
      console.log('\n--- Error Body ---')
      console.log(text)
      process.exitCode = 1
      return
    }
    let data
    try { data = JSON.parse(text) } catch { data = { raw: text } }
    console.log('\n--- Success Body (truncated) ---')
    const pretty = JSON.stringify(data, null, 2)
    console.log(pretty.length > 4000 ? pretty.slice(0, 4000) + '\n...[truncated]...' : pretty)

    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text
    if (answer) {
      console.log('\n--- Answer ---')
      console.log(answer)
    } else {
      console.warn('\nWarning: No answer found in candidates[0].content.parts[0].text')
    }
  } catch (err) {
    console.error('FETCH ERROR:', err?.stack || err?.message || String(err))
    process.exitCode = 1
  }
}

main()
