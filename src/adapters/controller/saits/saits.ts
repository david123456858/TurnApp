import { NextFunction } from 'express'
import { CaseUseCreateSait } from '../../../useCase/saits/create.sait'

export class ControllerSaits {
  private readonly caseUseCreate: CaseUseCreateSait

  constructor (caseUseCreate: CaseUseCreateSait) {
    this.caseUseCreate = caseUseCreate

    this.createSait = this.createSait.bind(this)
  }

  async createSait (req: Request, res: Response, Next: NextFunction): Promise<any> {

  }

  async getSaits (req: Request, res: Response, Next: NextFunction): Promise<any> {
  }
}
