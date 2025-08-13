/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'
import { RepositorySaits } from '@repository/saits/repository.saits'

export class CaseUseFindById {
  private readonly repository: RepositorySaits
  constructor (respository: RepositorySaits) {
    this.repository = respository
  }

  async findById (id: string): Promise<ISuccessProcess<any> | IFailureProcess<any>> {
    try {
      if (!id) return FailureProccess('Bad Request', 400)

      const findSait = await this.repository.findById(id)

      if (!findSait) return FailureProccess('Sait not Found', 404)

      return SuccessProcess(findSait, 200)
    } catch (error) {
      return FailureProccess('Error internal server', 500)
    }
  }
}
