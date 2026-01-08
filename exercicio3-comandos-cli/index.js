import readLine from "node:readline"

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

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
  let notations = {}

  return rl.question(`Digite a anotação: `, (answer) => {
    notations.note = answer
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