const path = require('node:path')

const dir = 'src'
const file = 'arquivo.js'

const fullPath = path.join(__dirname, dir, file)   //juntar todos os argumentos em um unico caminho, dirname pega o caminho absoluto
//const relativePath = path.join('.', dir, file) //mostra apenas os arquivos do diretorio atual, src/arquivo.js

//console.log(fullPath)

const relativePath = '../arquivos/relatorio.pdf'

const absolutPath = path.resolve(__dirname, relativePath) //ira mostrar o caminho completo, menos a pasta path, pois pulou essa pasta com ../
console.log(absolutPath)