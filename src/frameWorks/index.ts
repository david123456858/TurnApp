import express, { Response, Request } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'

import { DataBase } from '@framework/db/db'

import { routerAuth } from '@routes/Auth/auth'
import { routeUser } from '@routes/users/userRoute'
import { routeRoles } from '@routes/Role/role'

config()

const app = express()

const port = process.env.PORT ?? 3002

app.use(
  cors({
    origin: '*', credentials: true
  })
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function StarBd () {
  const db = DataBase.Instance
  const connect = await db.connectBD()

  if (connect !== null) console.log('Se conecto correctamente')
}

void StarBd()

app.use(express.json())
app.use(morgan('dev'))

// part the routes
app.use(routerAuth())
app.use(routeUser())
app.use(routeRoles())

app.disable('x-powered-by')

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Escuchando es este puerto señores http://localhost:${port}`)
})
