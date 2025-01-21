/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { repositoryRules } from '../../repository/rule/repository.rule'

export class caseUseFindsRoles {
  private readonly repositoryRules: repositoryRules
  constructor (respositoy: repositoryRules) {
    this.repositoryRules = respositoy
  }

  async findRule (): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      const findRules = await this.repositoryRules.findAll()

      if (!findRules) return FailureProccess('Not found', 404)

      return SuccessProcess(findRules, 200)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
