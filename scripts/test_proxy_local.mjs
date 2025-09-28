// Quick local proxy tester using Node fetch
const base = process.argv[2] || 'http://localhost:5174'
const question = process.argv.slice(3).join(' ') || 'Phép biện chứng duy vật là gì?'

async function main(){
  const resp = await fetch(base.replace(/\/$/,'') + '/api/ai/chat',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({messages:[{role:'user',content:question}]})
  })
  const text = await resp.text()
  console.log('STATUS', resp.status)
  console.log(text)
}
main().catch(e=>{console.error(e);process.exit(1)})