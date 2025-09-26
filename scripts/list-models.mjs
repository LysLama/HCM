#!/usr/bin/env node
// Liệt kê các model Gemini khả dụng với API key hiện tại.
// Usage: npm run list:gemini [--raw]

import fs from 'node:fs'
import path from 'node:path'

function loadApiKey() {
  const envKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY
  if (envKey) return envKey
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), '.env'), 'utf8')
    const m = raw.match(/^\s*VITE_GEMINI_API_KEY\s*=\s*(.+)$/m)
    if (m) return m[1].trim()
  } catch {}
  return null
}

const apiKey = loadApiKey()
if (!apiKey) {
  console.error('❌ Không tìm thấy API key (VITE_GEMINI_API_KEY).')
  process.exit(1)
}

const wantRaw = process.argv.includes('--raw')

async function main() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models`;
  console.log('🔍 Fetching model list from:', url)
  try {
    const res = await fetch(url + `?key=${apiKey}`)
    const text = await res.text()
    if (!res.ok) {
      console.error('❌ Request failed:', res.status, res.statusText)
      console.error(text)
      process.exit(1)
    }
    let data
    try { data = JSON.parse(text) } catch { console.log(text); return }
    if (wantRaw) {
      console.log(JSON.stringify(data, null, 2))
      return
    }
    const models = data?.models || []
    if (!models.length) {
      console.log('⚠️ Không có model nào trả về.')
      return
    }
    // Lọc các trường chính
    const rows = models.map(m => ({
      name: m.name,
      display: m.displayName,
      desc: m.description?.slice(0, 60) || '',
      input: m.inputTokenLimit,
      output: m.outputTokenLimit,
      blocked: m.state && m.state !== 'ACTIVE'
    }))
    const usable = rows.filter(r => !r.blocked)
    console.log(`✅ Tổng: ${rows.length}, usable: ${usable.length}`)
    usable.forEach(r => {
      console.log(`• ${r.name} (in≈${r.input}, out≈${r.output}) - ${r.display}`)
    })
    const inactive = rows.filter(r => r.blocked)
    if (inactive.length) {
      console.log('\n🚫 Inactive / blocked models:')
      inactive.forEach(r => console.log(`  - ${r.name}`))
    }
    console.log('\nGợi ý chọn nhanh: ưu tiên *flash* (nhanh) hoặc *pro* (chất lượng).')
  } catch (e) {
    console.error('❌ Fetch error:', e.message)
    process.exit(1)
  }
}

main()
