const os = require('os')
const fs = require('fs/promises')

function showInfos() {
  const nameSystem =  `Nome do sistema operacional: ${os.type()} \n`
  const archSystem =  `Arquitetura do sistema operacional: ${os.arch()} \n`
  const cpuModel = `Modelo do processador: ${os.cpus()[0].model} \n`
  const totalMemory = `Total de memória RAM: ${os.totalmem() / 1024 / 1024 / 1024} GB \n`
  const ramUsagePercent = `Uso de memória RAM (%): ${parseInt((1 - os.freemem() / os.totalmem()) * 100)}% \n`
  const memoryUsage = `Uso de memória do código: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(5)} MB \n`
  const memoryTotal = `Total de memória do código: ${process.memoryUsage().heapTotal / 1024 / 1024} MB \n`
  const uptime = `Tempo de atividade do sistema: ${(os.uptime() / 60).toFixed(2)} minutos \n\n`

  return nameSystem + archSystem + cpuModel + totalMemory + ramUsagePercent + memoryUsage + memoryTotal + uptime
}

function createFile() {
  setInterval(async () => {
    try {
      await fs.appendFile('./log/log.txt', showInfos())
      console.log('Arquivo atualizado com sucesso!')
    } catch (error) {
      console.error(`Erro ao criar arquivo: ${error.message}`)
      throw error
    }
  }, 1000)
}

module.exports = createFile