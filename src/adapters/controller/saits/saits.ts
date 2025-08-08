import { NextFunction, Request, Response } from 'express'
import { CaseUseCreateSait } from '@useCase/saits/create.sait'

export class ControllerSaits {
  private readonly caseUseCreate: CaseUseCreateSait

  constructor (caseUseCreate: CaseUseCreateSait) {
    this.caseUseCreate = caseUseCreate

    this.createSait = this.createSait.bind(this)
  }

  async createSait (req: Request, res: Response, Next: NextFunction): Promise<any> {
    const result = await this.caseUseCreate.createSait(req.body)

    if (!result.success) {
      const error = {
        statusCode: result.status,
        value: result.error
      }
      return Next(error)
    }
    return res.json({ message: result.value }).status(result.status)
  }

  async getSaits (req: Request, res: Response, Next: NextFunction): Promise<any> {
  }
}
