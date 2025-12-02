import {createFile, rewriteFile, readFile, deleteFile} from './executions.mjs'

async function start() {
  await createFile()
  await readFile()
  await rewriteFile()
  await readFile()
  await deleteFile()
}

start()