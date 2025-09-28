// Serverless proxy to Cloudflare Workers AI (llama-3.1-8b-instruct-fast)
// POST /api/ai/chat  { messages: [{role:'user'|'assistant'|'system', content:'...'}] }
// Env vars required: CF_ACCOUNT_ID, CF_AI_TOKEN
// Optional: CF_MODEL (default: @cf/meta/llama-3.1-8b-instruct-fast)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const accountId = process.env.CF_ACCOUNT_ID;
  const token = process.env.CF_AI_TOKEN;
  const model = process.env.CF_MODEL || '@cf/meta/llama-3.1-8b-instruct-fast';

  if (!accountId || !token) {
    return res.status(500).json({ error: 'Missing Cloudflare AI credentials (CF_ACCOUNT_ID / CF_AI_TOKEN)' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (!messages.length) {
    return res.status(400).json({ error: 'Missing messages array' });
  }

  // Cloudflare Workers AI expects raw model id in path (already safe, contains '@' and '/').
  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${model}`;

  // Build prompt first (primary) then fallback to messages if needed.
  const prompt = messages.map(m => `${(m.role||'user').toUpperCase()}: ${m.content}`).join('\n') + '\nASSISTANT:';

  async function callWorkers(body) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }

  try {
    console.log('[AI][serverless] inbound messages count=', messages.length);
    let upstream = await callWorkers({ prompt });
    if (upstream.status === 400) {
      console.log('[AI][serverless] prompt variant 400, retry messages');
      upstream = await callWorkers({ messages });
      if (upstream.status === 400) {
        console.log('[AI][serverless] messages variant 400, retry input');
        upstream = await callWorkers({ input: prompt });
      }
    }
    const text = await upstream.text();
    if (upstream.status !== 200) {
      console.log('[AI][serverless] upstream error status', upstream.status, text.slice(0,300));
    }
    res.status(upstream.status);
    res.setHeader('content-type', upstream.headers.get('content-type') || 'application/json');
    res.send(text);
  } catch (err) {
    res.status(502).json({ error: 'Upstream request failed', detail: err.message });
  }
}
