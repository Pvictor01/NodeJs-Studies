import fs from 'node:fs' //node: pois é módulo nativo (opcional) 

const entryes = 'entr1,entr2,entr3'

fs.writeFile('./arquivo.txt', entryes, (err) => {
  if(err) {
    console.log(`Erro ao escrever arquivo ${err.message}`)
    return    
  }

  console.log('Arquivo escrito com sucesso')  
})