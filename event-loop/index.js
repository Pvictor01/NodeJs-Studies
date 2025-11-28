const fs = require('node:fs')
console.log('Inicio')

fs.readFile('./arquivo.txt', 'utf8', (err, data) => { // Lendo o arquivo de forma ASSÍNCRONA, callback(err, data) => {}
  if(err) throw err
  console.log(data)
})

console.log('Fim')