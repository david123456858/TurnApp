/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { repositoryRules } from '../../repository/rule/repository.rule'

export class caseUseDeletedRole {
  private readonly repositoryRules: repositoryRules
  constructor (respositoy: repositoryRules) {
    this.repositoryRules = respositoy
  }

  async deleteRule (data: string): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      // logica crear role
      const ruleDeleted = await this.repositoryRules.delete(data)

      return SuccessProcess(`rule delete ${ruleDeleted}`, 201)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
