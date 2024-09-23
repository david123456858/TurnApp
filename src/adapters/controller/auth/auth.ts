import { NextFunction, Request, Response } from 'express'
import { caseUseRegister } from '../../../useCase/Auth/register'
import { registerDto } from '../../../Dtos/auth/registerDtos'

export class AuthController {
  caseUseRegister: caseUseRegister

  constructor (caseUse: caseUseRegister) {
    this.caseUseRegister = caseUse
    this.register = this.register.bind(this)
  }

  async register (req: Request, res: Response, next: NextFunction): Promise<void> {
    const userReq: registerDto = req.body

    const registerCreated = await this.caseUseRegister.register(userReq)

    res.status(registerCreated.status).json({ data: registerCreated.success })
  }
}
