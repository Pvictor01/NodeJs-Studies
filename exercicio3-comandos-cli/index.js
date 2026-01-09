import readLine from "node:readline"
import fs from "node:fs"

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let notations = []

function menuOptions() {
  const menu = (`
              *** Menu ***
    Escolha uma das opções abaixo:\n
    - Criar anotações (1)\n
    - listar todas os arquivos salvos (2)\n
    - ler uma anotação específica (3)\n
    - excluir uma anotação específica (4)\n
  `)

  return menu
}

function createNote() {
  return rl.question(`Digite a anotação: `, (answer) => {
    notations.push(answer)

    fs.writeFile('history.txt', notations.toString(), (err) => {
      if (err) {
        console.log(err)
        return
      } else {
        console.log('Arquivo criado com sucesso!')
      }
    })

    console.log(notations)
    main()
  })
}

function main() {
  rl.question(menuOptions(), (answer) => { //obs* write nao aceita callback
    console.log(`Você escolheu a opção: ${answer}`)
  
    switch(answer) {
      case '1':
        createNote()
        menuOptions()
        break
      case 2:
        break
      case 3:
        break
      case 4:
        break
      default:
        console.log('Opção inválida')
        breakLine()
    }
  }) 
}

main()

function breakLine() {
  rl.close()
}