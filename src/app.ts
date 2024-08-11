import express,{ Response,Request } from "express";
import morgan from "morgan";

import { connection } from './infrastructur/persitense/connectionDb'
const app = express()

const port = 3001

app.use(express.json())
app.use(morgan('dev'))

connection()
.then(()=>{
    console.log('se conecto a la base de datos');
})

app.disable('x-powered-by')

app.get('/',(req:Request,res:Response)=>{
    res.send("Bienvenido a la cosota que voy a realizar")
})
app.listen(port,()=>{
    console.log(`Escuchando es este puerto señores http://localhost:${port}`)
})