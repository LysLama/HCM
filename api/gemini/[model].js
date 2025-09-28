// Deprecated: Gemini endpoint retired after migration to Cloudflare Workers AI.
export default function handler(_req, res) {
  res.status(410).json({ error: 'Gone', detail: 'Gemini API removed. Use /api/ai/chat instead.' })
}
