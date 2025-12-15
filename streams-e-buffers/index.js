const fs = require('node:fs')

const streamLeitura = fs.createReadStream('text.txt') //criando stream de leitura

const buffer = []

streamLeitura.on('data', chunk => { //add evento de data, chunck sao dados em pequenos pedaços
  buffer.push(chunk)
  console.log('Um chunk foi processado')
})

streamLeitura.on('end', () => { //evento para quando finalizar a leitura
  console.log('Buffer: ', buffer)
  const dadosCompletos = Buffer.concat(buffer).toString()
  console.log('Dados Completos: ', dadosCompletos)
})