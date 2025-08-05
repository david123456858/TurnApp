import { IFailureProcess, ISuccessProcess } from '@interface/results/restults'
import { FailureProccess, SuccessProcess } from '@utils/result/resultApi'
import { repositoryRules } from '@repository/rule/repository.rule'

export class CaseUseFindById {
  private readonly repository: repositoryRules

  constructor (repositoryRoles: repositoryRules) {
    this.repository = repositoryRoles
  }

  async findByIdRole (IdRole: string): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      if (IdRole === null) return FailureProccess('Inprocessible entity', 422)

      if (IdRole === undefined) return FailureProccess('Inprocessible entity', 422)

      const findRole = await this.repository.findById(IdRole)

      return SuccessProcess(findRole, 200)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
