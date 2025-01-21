/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { Roles } from '../../Entity/Role/roles'
import { registerRuleDto } from '../../Dtos/rules/registerDtoRules'
import { repositoryRules } from '../../repository/rule/repository.rule'
import { repositoryUser } from '../../repository/user/repository.user'

export class caseUseCreated {
  private readonly repositoryRules: repositoryRules
  private readonly respositoryUsers: repositoryUser
  constructor (respositoy: repositoryRules, repositoryUser: repositoryUser) {
    this.repositoryRules = respositoy
    this.respositoryUsers = repositoryUser
  }

  async createRule (data: registerRuleDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      // logica crear role

      const findCompany = await this.respositoryUsers.findByEmail(data.company)

      if (!findCompany) return FailureProccess('not found company', 404)

      const ruleFindVerify = await this.repositoryRules.findByNameRule(data.nameRule)

      if (ruleFindVerify !== null) return FailureProccess('rule already created', 409)

      const rule = new Roles()
      rule.nameRole = data.nameRule
      rule.description = data.description
      rule.company = findCompany
      rule.idRole = data.idRule

      await this.repositoryRules.save(rule)

      return SuccessProcess('rule created', 201)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
