import { log } from 'node:console'
import fs from 'node:fs'

fs.rename('./arquivo.txt', './arquivo-renomeado.txt', (err) => {
  if(err) {
    log(`Erro ao renomear arquivo ${err.message}`)
    return
  }

  console.log('Arquivo renomeado com sucesso')
})