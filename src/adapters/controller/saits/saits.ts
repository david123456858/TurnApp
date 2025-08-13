import { NextFunction, Request, Response } from 'express'
import { CaseUseCreateSait } from '@useCase/saits/create.sait'
import { CaseUseFindSaits } from '@useCase/saits/finds.saits'
import { CaseUseDeleteSait } from '@useCase/saits/delete.saits'
import { CaseUseFindById } from '@useCase/saits/findById'
import { CaseUseUpdateSaits } from '@useCase/saits/update.sait'

export class ControllerSaits {
  private readonly caseUseCreate: CaseUseCreateSait
  private readonly caseUseFindAllSaits: CaseUseFindSaits
  private readonly caseUseDeleleSait: CaseUseDeleteSait
  private readonly caseUseFindByIdSait: CaseUseFindById
  private readonly caseUseUpdateSait: CaseUseUpdateSaits

  /// TOTALMENTE REVISRA ALGUN PATRON DE DISEÑO QUE NOS PERMITAN MINIMIZAR TODO ESTE CODIGO
  constructor (
    caseUseCreate: CaseUseCreateSait,
    caseUseFind: CaseUseFindSaits,
    caseUseFindById: CaseUseFindById,
    caseUseDelete: CaseUseDeleteSait,
    caseUseUpdate: CaseUseUpdateSaits
  ) {
    this.caseUseCreate = caseUseCreate
    this.caseUseFindAllSaits = caseUseFind
    this.caseUseFindByIdSait = caseUseFindById
    this.caseUseDeleleSait = caseUseDelete
    this.caseUseUpdateSait = caseUseUpdate

    this.createSait = this.createSait.bind(this)
    this.getSaits = this.getSaits.bind(this)
    this.getByIdSait = this.getByIdSait.bind(this)
    this.deleteSait = this.deleteSait.bind(this)
    this.updateSait = this.updateSait.bind(this)
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
    const resultFindSaits = await this.caseUseFindAllSaits.findSaits()

    if (!resultFindSaits.success) {
      const error = {
        statusCode: resultFindSaits.status,
        value: resultFindSaits.error
      }
      return Next(error)
    }
    return res.json({ message: resultFindSaits.value }).status(resultFindSaits.status)
  }

  async getByIdSait (req: Request, res: Response, Next: NextFunction): Promise<any> {
    const result = await this.caseUseFindByIdSait.findById(req.params.id)

    if (!result.success) {
      const error = {
        statusCode: result.status,
        value: result.error
      }
      return Next(error)
    }
    return res.json({ message: result.value }).status(result.status)
  }

  async deleteSait (req: Request, res: Response, Next: NextFunction): Promise<any> {
    const result = await this.caseUseDeleleSait.deleteSait(req.params.id)

    if (!result.success) {
      const error = {
        statusCode: result.status,
        value: result.error
      }
      return Next(error)
    }
    return res.json({ message: result.value }).status(result.status)
  }

  async updateSait (req: Request, res: Response, Next: NextFunction): Promise<any> {
    const result = await this.caseUseUpdateSait.updateSaits(req.body)

    if (!result.success) {
      const error = {
        statusCode: result.status,
        value: result.error
      }
      return Next(error)
    }
    return res.json({ message: result.value }).status(result.status)
  }
}
