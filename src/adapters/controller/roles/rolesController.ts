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
}
