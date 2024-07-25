import express,{ Response,Request } from "express";
import morgan from "morgan";

const app = express()

const port = 3001

app.use(express.json())
app.use(morgan('dev'))

app.disable('x-powered-by')

app.get('/',(res:Response,req:Request)=>{
    res.json({data:"Señores volvi a tener sed"})
})

app.listen(port,()=>{
    console.log(`Escuchando es este puerto señores http://localhost${port}`)
})