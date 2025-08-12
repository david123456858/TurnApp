/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'
import { repositoryRules } from '@repository/rule/repository.rule'
import { RepositorySaitRole } from '@repository/sait-role/sait-role'
import { RepositorySaits } from '@repository/saits/repository.saits'

export class CaseUseUpdateSaits {
  private readonly repository: RepositorySaits
  private readonly repositorySaitRole: RepositorySaitRole
  private readonly repositoryRole: repositoryRules

  constructor (respository: RepositorySaits) {
    this.repository = respository
    this.repositorySaitRole = new RepositorySaitRole() // esto es algo provicional
    this.repositoryRole = new repositoryRules()
  }

  async updateSaits (dto: string): Promise<IFailureProcess<any> | ISuccessProcess<any> > {
    try {
      return SuccessProcess('', 200)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
