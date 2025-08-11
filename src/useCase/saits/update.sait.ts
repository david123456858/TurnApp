import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'
import { RepositorySaits } from '@repository/saits/repository.saits'

export class CaseUseUpdateSaits {
  private readonly repository: RepositorySaits
  constructor (respository: RepositorySaits) {
    this.repository = respository
  }

  async updateSaits (dto: string): Promise<IFailureProcess<any> | ISuccessProcess<any> > {
    try {
      return SuccessProcess('', 200)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
