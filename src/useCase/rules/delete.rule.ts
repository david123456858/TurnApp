import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { repositoryRules } from '../../repository/rule/repository.rule'

export class caseUseCreated {
  private readonly repositoryRules: repositoryRules
  constructor (respositoy: repositoryRules) {
    this.repositoryRules = respositoy
  }

  async deleteRule (): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      // logica crear role
      return SuccessProcess('rule deleted', 201)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
