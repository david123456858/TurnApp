import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { RepositorySaits } from '../../repository/saits/repository.saits'

export class CaseUseCreateSait {
  private readonly repository: RepositorySaits
  constructor (repository: RepositorySaits) {
    this.repository = repository
  }

  async createSait (): Promise<IFailureProcess<any> | ISuccessProcess<any>> {

  }
}
