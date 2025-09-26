import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env variables for both dev and build time
  const env = loadEnv(mode, process.cwd(), '')
  const apiKey = env.VITE_GEMINI_API_KEY

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        // Proxy browser requests like /api/gemini/<model>
        // to Google's Generative Language API with the API key attached server-side
        '/api/gemini': {
          target: 'https://generativelanguage.googleapis.com',
          changeOrigin: true,
          secure: true,
          headers: apiKey ? { 'x-goog-api-key': apiKey } : {},
          // Rewrite: /api/gemini/<model> -> /v1beta/models/<model>:generateContent
          rewrite: (path) => path
            .replace(/^\/api\/gemini\//, '/v1beta/models/')
            .concat(':generateContent'),
        },
      },
    },
  }
})
