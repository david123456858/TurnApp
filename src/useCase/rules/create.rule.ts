import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { rules } from '../../domain/rules/rules'
import { registerRuleDto } from '../../Dtos/rules/registerDtoRules'
import { repositoryRules } from '../../repository/rule/repository.rule'

export class caseUseCreated {
  private readonly repositoryRules: repositoryRules
  constructor (respositoy: repositoryRules) {
    this.repositoryRules = respositoy
  }

  async createRule (data: registerRuleDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      // logica crear role
      const ruleFindVerify = this.repositoryRules.findByNameRule(data.nameRule)

      if (ruleFindVerify !== null) return FailureProccess('rule already created', 409)

      const rule = new rules()
      rule.nameRule = data.nameRule
      rule.numberTotal = data.numberTotal
      rule.description = data.description
      rule.company = data.company

      const resultRule = this.repositoryRules.save(rule)
      console.log(resultRule)

      return SuccessProcess('rule created', 201)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
