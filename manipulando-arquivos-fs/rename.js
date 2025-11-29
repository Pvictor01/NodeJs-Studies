import fs from 'node:fs'

fs.rename('./arquivo.txt', './arquivo-renomeado.txt', (err) => {
  if(err) {
    console.log(`Erro ao renomear arquivo ${err.message}`)
    return
  }

  console.log('Arquivo renomeado com sucesso')
})