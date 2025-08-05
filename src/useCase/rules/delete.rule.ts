/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IFailureProcess, ISuccessProcess } from '@interface/results/restults'
import { FailureProccess, SuccessProcess } from '@utils/result/resultApi'
import { repositoryRules } from '@repository/rule/repository.rule'

export class caseUseDeletedRole {
  private readonly repositoryRules: repositoryRules
  constructor (respositoy: repositoryRules) {
    this.repositoryRules = respositoy
  }

  async deleteRule (data: string): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      if (data === null) return FailureProccess('Inprocessible entity', 422)

      if (data === undefined) return FailureProccess('Inprocessible entity', 422)

      const finds = await this.repositoryRules.findById(data)

      if (!finds) return FailureProccess('Role dont exist', 404)
      // logica crear role
      const ruleDeleted = await this.repositoryRules.delete(data)

      return SuccessProcess(`rule delete ${ruleDeleted}`, 201)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
