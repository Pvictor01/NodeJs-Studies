import fs from 'node:fs'

const filename = './arquivo.txt'

const exists = fs.existsSync(filename)

if (exists) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.log(`Erro ao ler o arquivo: ${err.message}`)
      return
    }
  
    const entries = data.split(',')
    console.log(entries);
    
    entries.forEach(entry => {console.log(entry)})  
  })
} else {
  console.log('Arquivo não existe')
}

