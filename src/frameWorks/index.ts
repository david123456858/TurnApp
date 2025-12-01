import { config } from 'dotenv'
import { DataBase } from '@framework/db/db'
import { Server } from '@adapters/config/Server'

config()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function StarBd () {
  const db = DataBase.Instance
  const connect = await db.connectBD()

  if (connect !== null) console.log('Se conecto correctamente')
}


try {
  void StarBd()
  const server = Server.getInstance()
  server.listen()
} catch (error) {
  console.log(`Error al empezar el server ${error}`); 
}
