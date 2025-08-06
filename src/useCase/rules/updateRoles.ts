/* eslint-disable @typescript-eslint/no-misused-promises */
import { IFailureProcess, ISuccessProcess } from '@interface/results/restults'
import { FailureProccess, SuccessProcess } from '@utils/result/resultApi'
import { UpdateRolDto } from '@Dtos/rules/UpdateRolesDto'
import { Roles } from '@Entity/Role/roles'
import { repositoryRules } from '@repository/rule/repository.rule'

export class caseUseUpdateRoles {
  private readonly repositoryRules: repositoryRules
  constructor (respositoy: repositoryRules) {
    this.repositoryRules = respositoy
  }

  async updateRule (roleUpdate: UpdateRolDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      const roleFind = await this.repositoryRules.findByNameRule(roleUpdate.nameRule)
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!roleFind) return FailureProccess('Role Not Found', 404)

      if (roleFind === null) return FailureProccess('Inprocessible entity', 422)

      if (roleFind === undefined) return FailureProccess('Inprocessible entity', 422)

      const role = new Roles()
      role.idRole = roleFind.idRole
      role.description = roleUpdate.description
      role.nameRole = roleUpdate.nameRule
      role.company = roleUpdate.company

      await this.repositoryRules.update(role)

      return SuccessProcess('Role updated succesufully', 201)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
