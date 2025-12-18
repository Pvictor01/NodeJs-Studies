/*
process.stdout.write('Hello World!') //process variavel global, disponivel no node (standard output, escreve no terminal)

process.stdin.on('data', (data) => { // standard input metodo on associa um evento, cria um listener
  process.stdout.write(`Voce digitou: ${data}`) //vai ficar aguardando a entrada, depois mostra o que foi digitado
})
*/

/*
const readLine = require('node:readline') //consegue criar interface capaz de ler as linhas do terminal
const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })
rl.on('data', (input) => { //método que faz parecido com o primeiro codigo, mas repete tudo que ja foi escrito
  rl.write(`Voce digitou: ${input}`)
})
*/

import readLine from 'node:readline' //consegue criar interface capaz de ler as linhas do terminal
const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })

rl.question('Qual o seu nome? ', (answer) => { //qustion faz pergunta no terminal
  rl.write(`Olá ${answer}!\n`) //retorna com o valor do callback
  rl.close() //encerra o question
})    

rl.on('close', () => {  //once() executa o processo apenas uma vez, evento close escuta o rl.close() acima
  rl.write(`Saindo...\n`)
  process.exit(0) //encerra o processo no terminal
})

/*rl.on('SIGINT', () => { //sigint (ctrl + c) quando interromper o processo
  rl.question('Deseja sair? (s/n)', (answer) => {
    if(answer.trim().toLowerCase() === 's') { //se a resposta nao tiver espaço e tudo minuscula for 's'
      rl.write('Saindo...')
      process.exit(0)
    } else {
      rl.write('Voltando...')
    }
  })
})*/