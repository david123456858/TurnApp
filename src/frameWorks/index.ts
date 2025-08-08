import express, { Response, Request } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'

import { DataBase } from '@framework/db/db'

import { routerAuth } from '@routes/Auth/auth'
import { routeUser } from '@routes/users/userRoute'
import { routeRoles } from '@routes/Role/role'
import { baseRoute, PREFIX_ROUTE } from '@adapters/config/routerConfig'
import { routeSaits } from '@routes/saits/saits'

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

app.use(express.json({ limit: '50mb' }))
app.use(morgan('dev'))

// part the routes
app.use(baseRoute, routerAuth(PREFIX_ROUTE.AUTH))
app.use(baseRoute, routeUser(PREFIX_ROUTE.USERS))
app.use(baseRoute, routeRoles(PREFIX_ROUTE.ROLES))
app.use(baseRoute, routeSaits(PREFIX_ROUTE.SAITS))

app.disable('x-powered-by')

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Escuchando es este puerto señores http://localhost:${port}`)
})
