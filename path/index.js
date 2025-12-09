const path = require('node:path')

const dir = 'src'
const file = 'arquivo.js'

const fullPath = path.join(__dirname, dir, file)   //juntar todos os argumentos em um unico caminho, dirname pega o caminho absoluto
const relativePath = path.join('.', dir, file) //mostra apenas os arquivos do diretorio atual, src/arquivo.js
console.log(fullPath)
console.log(relativePath)