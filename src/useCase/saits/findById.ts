import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'

export class CaseUseFindById {
  async findById (id: string): Promise<ISuccessProcess<any> | IFailureProcess<any>> {
    try {
      // preparando esto para cuando pueda programar y retomar las idea de tener la empresa
      return SuccessProcess('', 200)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
