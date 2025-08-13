import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'

export class caseUseCreateSchedule {
  async createSchedule (): Promise<ISuccessProcess<any> | IFailureProcess<any>> {
    try {
      return SuccessProcess('', 201)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
