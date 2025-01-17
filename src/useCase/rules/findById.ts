import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { repositoryRules } from '../../repository/rule/repository.rule'

export class CaseUseFindById {
  private readonly repository: repositoryRules

  constructor (repositoryRoles: repositoryRules) {
    this.repository = repositoryRoles
  }

  async findByIdRole (): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      return SuccessProcess('', 200)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
