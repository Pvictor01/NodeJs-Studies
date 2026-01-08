import readLine from "node:readline"
import fs from "node:fs"
import { randomUUID } from "node:crypto"

var NOTATION_DATABASE = []

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function menuOptions(choiceCallback) {
  const menu = (`
              *** Menu ***
    Escolha uma das opções abaixo:\n
    - Criar anotações (1)\n
    - listar todas os arquivos salvos (2)\n
    - ler uma anotação específica (3)\n
    - excluir uma anotação específica (4)\n
  `)

  question(menu, choiceCallback)
}

function loadHistory() {
  const filexists = fs.existsSync('history.json')

  if (!filexists) {
    fs.writeFileSync('history.json', [])
  }

  fs.readFile("history.json", 'utf-8', (err, data) => {
    if (err) {
      return console.log(err)
    } else {
      NOTATION_DATABASE = JSON.parse(data)
    }
  })
}

function question(description, callback) {
  rl.question(description, (answer) => {
    callback(answer)
  })
}

function createNote(answer, callback) {
    let notation = {
      notation: answer,
      date: new Date(),
      id: randomUUID()
    }
    NOTATION_DATABASE.push(notation)
    fs.writeFileSync('history.json', JSON.stringify(NOTATION_DATABASE))
    menuOptions(callback)
}

function listNotes(choiceCallback) {
  NOTATION_DATABASE.forEach((content, _) => {
    console.log(content)
  })
  menuOptions(choiceCallback)
}

function choiceCallback(answer) {
    console.log()
    console.log(`Você escolheu a opção ${answer}`)
  
    switch(answer) {
      case '1':
        question('Digite a anotação: ', createNote)
        break
      case '2':
        listNotes(choiceCallback)
        break
      case '3':
        console.log('Opção 3 nao disponivel ainda')
        break
      case '4':
        console.log('Opção 4 nao disponivel ainda')
        break
      default:
        console.log('Opção inválida')
    }
}

function main() {
  loadHistory()
  question(menuOptions(choiceCallback), choiceCallback) 
}

main()