/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { NextFunction, Request, Response } from 'express'
import { caseUseRegister } from '@useCase/Auth/register'
import { registerDto } from '@Dtos/auth/registerDtos'
import { logginDto } from '@Dtos/auth/logginDtos'
import { caseUserLoggin } from '@useCase/Auth/login'

export class AuthController {
  caseUseRegister: caseUseRegister
  caseUseLoggin: caseUserLoggin

  // revisar contexto del this entendiendo pero todavia falta
  constructor (caseUse: caseUseRegister, caseLoggin: caseUserLoggin) {
    this.caseUseRegister = caseUse
    this.caseUseLoggin = caseLoggin

    this.register = this.register.bind(this)
    this.loggin = this.loggin.bind(this)
  }

  async register (req: Request, res: Response, next: NextFunction): Promise<void> {
    const userReq: registerDto = req.body

    const registerCreated = await this.caseUseRegister.register(userReq)

    if (!registerCreated.success) {
      const error = {
        status: registerCreated.status,
        messagge: registerCreated.error
      }
      return next(error)
    }

    console.log(registerCreated)

    res.status(registerCreated.status).json({ data: registerCreated.value })
  }

  async loggin (req: Request, res: Response, next: NextFunction): Promise<void> {
    const user: logginDto = req.body

    const userLogged = await this.caseUseLoggin.loggin(user)

    if (!userLogged.success) {
      const error = {
        status: userLogged.status,
        messagge: userLogged.error
      }
      return next(error)
    }
    res.status(userLogged.status).json({ data: userLogged.value })
  }
}
