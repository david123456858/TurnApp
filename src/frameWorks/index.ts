import express, { Response, Request } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { DataBase } from './db/db'
import { routerAuth } from '../adapters/router/Auth/auth'
import { routeUser } from '../adapters/router/users/userRoute'

const app = express()

const port = 3001

app.use(
  cors({
    origin: '*', credentials: true
  })
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function StarBd () {
  const db = DataBase.Instance
  const connect = await db.connectBD()

  if (connect != null) console.log('Se conecto correctamente')
}

void StarBd()

app.use(express.json())
app.use(morgan('dev'))

// part the routes
app.use(routerAuth())
app.use(routeUser())

app.disable('x-powered-by')

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenido a la cosota que voy a realizar')
})
app.listen(port, () => {
  console.log(`Escuchando es este puerto señores http://localhost:${port}`)
})
