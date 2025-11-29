import fs from 'node:fs'

fs.readFile('./arquivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(`Erro ao ler o arquivo: ${err.message}`)
    return
  }

  const entries = data.split(',')
  console.log(entries);
  
  entries.forEach(entry => {console.log(entry)})  
})