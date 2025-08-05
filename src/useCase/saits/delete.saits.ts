import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'

export class CaseUseDeleteSait {
  async deleteSait (id: string): Promise<ISuccessProcess<any> | IFailureProcess<any> > {
    try {
      return SuccessProcess('the saits has deleted successfuly', 200)
    } catch (error) {
      return FailureProccess('error internar server', 500)
    }
  }
}
