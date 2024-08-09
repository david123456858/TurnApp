import express,{ Response,Request } from "express";
import morgan from "morgan";

const app = express()

const port = 3001

app.use(express.json())
app.use(morgan('dev'))

app.disable('x-powered-by')

app.get('/',(req:Request,res:Response)=>{
    res.send("Bienvenido a la cosota que voy a realizar")
})
app.listen(port,()=>{
    console.log(`Escuchando es este puerto señores http://localhost:${port}`)
})