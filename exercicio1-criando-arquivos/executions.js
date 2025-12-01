/*​Crie um arquivo JavaScript que exporte, usando a sintaxe de ESModules, as 4 funções abaixo:
uma função que deve criar um arquivo de texto chamado "meuarquivo.txt" no diretório atual contendo o texto informado como argumento. >>>OK
uma função que deve reescrever o texto no arquivo "meuarquivo.txt" substituindo o conteúdo pelo texto informado no argumento.        >>>OK
uma função que deve ler o conteúdo do arquivo "meuarquivo.txt" e exibi-lo no console.                                                >>>OK

uma função que deve excluir o arquivo "meuarquivo.txt" do sistema de arquivos.

Depois de criar as funções você deve importá-las em um outro arquivo e executá-las para fins de teste de acordo com o exemplo abaixo:
*/

import fs from 'node:fs'

const fileData = 'Olá PV'

export function createFile() {
  fs.writeFile('./meuarquivo.txt', fileData, (err) => {
    if(err) {
      console.log(`Erro ao escrever arquivo ${err.message}`)
      return    
    }

    console.log(`func1 - Arquivo criado com sucesso!`)
  })
}


export function rewriteFile() {
  fs.writeFile('./meuarquivo.txt', 'Novo dado alterado', (err) => {
    if(err) {
      console.log(`Erro ao escrever arquivo ${err.message}`)
      return    
    }

    console.log(`func2 - Arquivo reescrito com sucesso!`)
  })
}

export function readFile() {
  fs.readFile('./meuarquivo.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log(`Erro ao ler arquivo ${err.message}`);
      return
    }

    console.log(`func3 - Arquivo lido com sucesso: ${data}`)
  })
}