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

    fs.writeFile('history.txt', JSON.stringify(notations), (err) => {
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

function listNotes() {
  fs.readFile('history.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log(err.message)
    } else {
      try {
        const notes = JSON.parse(data)
        console.log(notes)
      } catch (err) { //mostra o arquivo como esta, caso nao esteja em formato json valido
        console.log(data)
      }
    }
    main()
  })
}

function readNote() {
  rl.question(`Digite o posição da nota que deseja ler: `, (answer) => {
    const index = parseInt(answer)

    fs.readFile('history.txt', 'utf-8', (err, data) => {
      if(err) {
        console.log(err.message)
      } else {
        try {
          const notes = JSON.parse(data)
          if(index > 0 && index <= notes.length) {
            console.log(notes[index - 1])
          } else {
            console.log('Posição inválida')
          }
        } catch (error) {
          console.log('Erro ao ler a nota')
        }
      }
      main()
    })
  })
}

function main() {
  rl.question(menuOptions(), (answer) => { //obs* write nao aceita callback
    console.log(`Você escolheu a opção: ${answer}`)
  
    switch(answer) {
      case '1':
        createNote()
        break
      case '2':
        listNotes()
        break
      case '3':
        readNote()
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