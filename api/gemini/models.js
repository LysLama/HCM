// Deprecated: Gemini model listing removed.
export default function handler(_req, res) {
  res.status(410).json({ error: 'Gone', detail: 'Gemini models endpoint removed.' })
}
