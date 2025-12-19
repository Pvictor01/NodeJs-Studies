const args = process.argv //argv é uma lista dos arg da linha de comando

//console.log(args) //mostra 2 argumentos, o local que o node esta instalado e o caminho do arquivo atual

const namedArguments = {}

process.argv.slice(2).forEach((arg, index, arr) => { //slice retira os dois primeiros argumentos padrao
  if(arg.startsWith('--')) { //pega o item do arr que começa com --
    const argName = arg.slice(2) //retira os dois -- e pega so a string
    const argValue =  arr[index + 1]  //pega o proximo valor do item que começa com --
    namedArguments[argName] = argValue //insere chave e valor ao objeto
  }
})

console.log(namedArguments);