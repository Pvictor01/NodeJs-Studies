import os from 'node:os'

const plataform = os.platform()
console.log(`Plataforma do OS: ${plataform}`)

const architecture = os.arch()
console.log(`Arquitetura do OS: ${architecture}`)

const processors = os.cpus()
console.log(`Quantidade de processadores: ${processors.length}`)

const totalMemory = os.totalmem()
console.log(`Total de memória RAM: ${totalMemory / 1024 / 1024 / 1024} GB`)