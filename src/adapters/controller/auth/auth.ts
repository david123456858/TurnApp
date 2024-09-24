import { NextFunction, Request, Response } from 'express'
import { caseUseRegister } from '../../../useCase/Auth/register'
import { registerDto } from '../../../Dtos/auth/registerDtos'
import { logginDto } from '../../../Dtos/auth/logginDtos'
import { caseUserLoggin } from '../../../useCase/Auth/login'

export class AuthController {
  caseUseRegister: caseUseRegister
  caseUseLoggin: caseUserLoggin

  constructor (caseUse: caseUseRegister, caseLoggin: caseUserLoggin) {
    this.caseUseRegister = caseUse
    this.caseUseLoggin = caseLoggin

    this.register = this.register.bind(this)
    this.loggin = this.loggin.bind(this)
  }

  async register (req: Request, res: Response, next: NextFunction): Promise<void> {
    const userReq: registerDto = req.body

    const registerCreated = await this.caseUseRegister.register(userReq)

    res.status(registerCreated.status).json({ data: registerCreated })
  }

  async loggin (req: Request, res: Response, next: NextFunction): Promise<void> {
    const user: logginDto = req.body

    const userLogged = await this.caseUseLoggin.loggin(user)

    res.status(userLogged.status).json({ data: userLogged })
  }
}
