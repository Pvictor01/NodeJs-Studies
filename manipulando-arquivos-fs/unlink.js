import fs from 'node:fs'

fs.unlink('./arquivo-renomeado.txt', (err) => {
  if(err) {
    console.log(`Erro ao deletar arquivo ${err.message}`)
    return
  }

  console.log('Arquivo deletado com sucesso')
})