import { NextFunction, Request, Response } from 'express'
import { caseUseCreated } from '../../../useCase/rules/create.rule'
import { caseUseDeletedRole } from '../../../useCase/rules/delete.rule'
import { CaseUseFindById } from '../../../useCase/rules/findById'
import { caseUseFindsRoles } from '../../../useCase/rules/fing.rules'

export class controllerRoles {
  private readonly caseUseCreatedRole: caseUseCreated
  private readonly caseUseDeleteRoles: caseUseDeletedRole
  private readonly caseUseFinds: caseUseFindsRoles
  private readonly caseUseFindById: CaseUseFindById

  constructor (caseUseCreatedRole: caseUseCreated, caseUseDeleteRoles: caseUseDeletedRole, caseUseFinds: caseUseFindsRoles, caseUseFindById: CaseUseFindById) {
    this.caseUseCreatedRole = caseUseCreatedRole
    this.caseUseDeleteRoles = caseUseDeleteRoles
    this.caseUseFindById = caseUseFindById
    this.caseUseFinds = caseUseFinds
  }

  async createdRoles (req: Request, res: Response, Next: NextFunction): Promise<any> {
    const result = await this.caseUseCreatedRole.createRule(req.body)

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
