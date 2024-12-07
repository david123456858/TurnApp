import express, { Response, Request } from 'express'
import morgan from 'morgan'
import cors from 'cors'

// import { dbBase } from './db/db'
import { routerAuth } from '../adapters/router/Auth/auth'
import { routeUser } from '../adapters/router/users/userRoute'

const app = express()

const port = 3001

app.use(
  cors({
    origin: '*', credentials: true
  })
)
app.use(express.json())

app.use(morgan('dev'))

// async function starDb (): Promise<void> {
//   const DB = dbBase.instance
//   const dbIntanse = await DB.connectDb()
//   if (dbIntanse === null) {
//     return console.log('No se pudo contectar')
//   }
//   if (dbIntanse !== null) {
//     console.log('Se pudo conectar')
//   }
// }

// void starDb()

app.use(routerAuth())
app.use(routeUser())

app.disable('x-powered-by')

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenido a la cosota que voy a realizar')
})
app.listen(port, () => {
  console.log(`Escuchando es este puerto señores http://localhost:${port}`)
})
