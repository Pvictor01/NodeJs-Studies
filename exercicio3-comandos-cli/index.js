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

rl.question(menuOptions(), (answer) => { //obs* write nao aceita callback
  console.log(`Você escolheu a opção ${answer}`);
  rl.close()
}) 


rl.on('close', () => {
  process.exit(0)
})