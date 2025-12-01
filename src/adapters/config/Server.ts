import express,{ Application, Response, Request } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { baseRoute, PREFIX_ROUTE } from './routerConfig'
import { routerAuth } from '@routes/Auth/auth'
import { routeUser } from '@routes/users/userRoute'
import { routeRoles } from '@routes/Role/role'
import { routeSaits } from '@routes/saits/saits'
 
export class Server {
    private static instance: Server
    private readonly port: string
    private readonly app: Application
    
    private constructor () {
        this.app = express()
        this.port = '3000'

        this.middlwares()
        this.routes()
    }

    private middlwares(){
        this.app.use(cors({origin: '*', credentials: true}))
        this.app.use(express.json({ limit: '50mb' }))
        this.app.use(morgan('dev'))
        this.app.disable('x-powered-by')
    }
 
    private routes() { 
        this.app.use(baseRoute, routerAuth(PREFIX_ROUTE.AUTH))
        this.app.use(baseRoute, routeUser(PREFIX_ROUTE.USERS))
        this.app.use(baseRoute, routeRoles(PREFIX_ROUTE.ROLES))
        this.app.use(baseRoute, routeSaits(PREFIX_ROUTE.SAITS))

        this.app.get('/', (req: Request, res: Response) => {
            res.json({ message: 'I live, I´m turnApp' })})
    }

    public listen (){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando es este puerto señores http://localhost:${this.port}`);
            
        }) 
    }

    public static getInstance(){
        if (!this.instance){
            this.instance = new Server()
        }

        return this.instance
    }
    
} 