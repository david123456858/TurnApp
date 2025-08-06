import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'
import { saitCreatedDto } from '@Dtos/saits/saits'
import { RepositorySaits } from '@repository/saits/repository.saits'

export class CaseUseCreateSait {
  private readonly repository: RepositorySaits
  constructor (repository: RepositorySaits) {
    this.repository = repository
  }

  async createSait (sait: saitCreatedDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      return SuccessProcess('Site created successfully', 201)
    } catch (error) {
      return FailureProccess('Error creating site', 500)
    }
  }
}
