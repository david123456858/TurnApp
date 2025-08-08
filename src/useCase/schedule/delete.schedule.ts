import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'

export class caseUseDeleteSchedule {
  async deleteSchedule (): Promise<ISuccessProcess<any> | IFailureProcess<any>> {
    try {
      return SuccessProcess('', 204) // changed to 204 for no content response form correctly indicating deletion
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
