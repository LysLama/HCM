// GET /api/gemini/models  -> list available models from Gemini
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing Gemini API key on server' });
  const url = 'https://generativelanguage.googleapis.com/v1beta/models';
  try {
    const upstream = await fetch(url + `?key=${apiKey}`);
    const data = await upstream.json();
    return res.status(upstream.status).json(data);
  } catch (e) {
    return res.status(502).json({ error: 'Upstream request failed', detail: e.message });
  }
}
