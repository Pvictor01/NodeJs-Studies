const fs = require('fs')

const streamLeitura = fs.createReadStream('texto.txt')

const buffer = []

streamLeitura.on('data', chunk => {
  buffer.push(chunk)
  console.log('Um chunk foi processado')
})

streamLeitura.on('end', () => {
  console.log(`Buffer: \n ${buffer}`);
  const dadosCompletos = Buffer.concat(buffer).toString()
  console.log(`Dados Completos: \n ${dadosCompletos}`)
})