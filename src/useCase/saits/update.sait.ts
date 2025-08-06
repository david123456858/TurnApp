import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'

export class CaseUseUpdateSaits {
  async updateSaits (dto: string/* este es provicional mientras hago el DTO */): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      return SuccessProcess('', 200)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
