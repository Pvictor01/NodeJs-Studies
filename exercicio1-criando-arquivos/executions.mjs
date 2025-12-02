/*​Crie um arquivo JavaScript que exporte, usando a sintaxe de ESModules, as 4 funções abaixo:
uma função que deve criar um arquivo de texto chamado "meuarquivo.txt" no diretório atual contendo o texto informado como argumento. >>>OK
uma função que deve reescrever o texto no arquivo "meuarquivo.txt" substituindo o conteúdo pelo texto informado no argumento.        >>>OK
uma função que deve ler o conteúdo do arquivo "meuarquivo.txt" e exibi-lo no console.                                                >>>OK
uma função que deve excluir o arquivo "meuarquivo.txt" do sistema de arquivos.                                                       >>>OK*/

import fs from 'node:fs'

const fileData = 'Olá PV'

export function createFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile('./meuarquivo.txt', fileData, (err) => {
      if(err) {
        console.log(`Erro ao escrever arquivo ${err.message}`)
        reject()    
      } else {
        console.log(`func1 - Arquivo criado com sucesso!`)
        resolve()
      }
    })
  }) 
}

export function rewriteFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile('./meuarquivo.txt', 'Novo dado alterado', (err) => {
      if(err) {
        reject(`Erro ao escrever arquivo ${err.message}`)
      } else {
        console.log(`func2 - Arquivo reescrito com sucesso!`)
        resolve()
      }
    })
  })
}

export function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('./meuarquivo.txt', 'utf-8', (err, data) => {
      if(err) {
        console.log(`Erro ao ler arquivo ${err.message}`);
        reject()
      } else {
        console.log(`func3 - Arquivo lido com sucesso: ${data}`)
        resolve()
      }
    })
  })

}

export function deleteFile() {
  return new Promise((resolve, reject) => {
    fs.unlink('./meuarquivo.txt', (err) => {
      if(err) {
        console.log(`Erro ao deletar arquivo ${err.message}`)
        resolve()
      } else {
        console.log(`func4 - Arquivo deletado com sucesso!`)
        resolve()
      }
    })
  })
}