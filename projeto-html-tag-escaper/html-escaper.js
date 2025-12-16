const { error } = require('node:console')
const fs = require('node:fs') //lidar com os arquivos 
const path = require('node:path') //lidar com os caminhos
const readLine = require('node:readline') //perguntar coisas ao usuario

run()

function escapeHtmlSpecialChars(text) { //funçao pra escapar os caracteres html
  return text.replace(/[<>&]/g, (match) => {
    switch(match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      default:
        return match
    }
  })
}

function escapeHtmlFile(input, output) { //funçao pra 'escapar' os arquivos html
  try {
    const fileContent = fs.readFileSync(input, 'utf-8')
    const escapedContent = escapeHtmlSpecialChars(fileContent)
    fs.writeFileSync(output, escapedContent, 'utf-8')
    console.log(`Arquivo escapado com sucesso: ${output}`)
  } catch(error) {
    console.log(`Erro: ${error.message}`)
    process.exit(1)
  }  
}

function askFilePath(question) { //funçao pra perguntar o caminho ao usuário
  const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
      rl.close()
    })
  })
}

async function userInteraction() {
  let inputPath = process.argv[2] //caminho de entrada
  if(!inputPath) {
    inputPath = await askFilePath(`Informe o caminho do arquivo de entrada: `)
  }
  inputPath = path.resolve(inputPath) //pega o caminho absoluto do arquivo, caminho de entrada

  const defaultName = `escaped_${path.basename(inputPath)}.txt` //basename pega o nome do arquivo e extensao
  const answer = await askFilePath(`Informe o nome do arquivo de saída (padrão: ${defaultName}): `)
  let outputPath = answer.length > 0 ? answer : defaultName //coloca a resposta ou o nome padrao no arquivo
  outputPath = path.resolve(outputPath) //caminho de saída

  escapeHtmlFile(inputPath, outputPath)
}
function run() {
  if(process.argv.length >= 4) { //pois os 2 primeiros argumentos sao os padroes
    escapeHtmlFile(
      path.resolve(process.argv[2]),
      path.resolve(process.argv[3])
    )
  } else {
    console.log("---------------------")
    console.log("HTML Tag Escaper v1.0")
    console.log("---------------------\n")
    console.log("Argumentos não informados! Por favor, informe os caminhos dos arquivos para realizar o escape.")
    userInteraction()
  }
}