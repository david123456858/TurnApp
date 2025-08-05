import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'

export class caseUseDeleteSchedule {
  async updateSchedule (): Promise<ISuccessProcess<any> | IFailureProcess<any>> {
    try {
      return SuccessProcess('', 200)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
