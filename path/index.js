const path = require('node:path')

const dir = 'src'
const file = 'arquivo.js'

const fullPath = path.join(__dirname, dir, file)   //juntar todos os argumentos em um unico caminho, dirname pega o caminho absoluto
const atualPath = path.join('.', dir, file) //mostra apenas os arquivos do diretorio atual, src/arquivo.js
console.log(`usando join com dirname: ${fullPath}`)
console.log(`arquivos do dir atual: ${atualPath}`)

const relativePath = '../arquivos/relatorio.pdf'
const absolutPath = path.resolve(__dirname, relativePath) //ira mostrar o caminho completo, menos a pasta path, pois pulou essa pasta com ../
console.log(`usando resolve: ${absolutPath}`)//resolve de acordo com o solicitado

const fileName = path.basename(__filename) //retorna a ultima parte de um caminho
console.log(`usando o filename: ${fileName}`)

const ext = path.extname(__filename)  //Mostra o nome da extensão
console.log(`usando o extname: ${ext}`)