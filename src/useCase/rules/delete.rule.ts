import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { DeleteDtoRules } from '../../Dtos/rules/deleteDtoRules'
import { repositoryRules } from '../../repository/rule/repository.rule'

export class caseUseCreated {
  private readonly repositoryRules: repositoryRules
  constructor (respositoy: repositoryRules) {
    this.repositoryRules = respositoy
  }

  async deleteRule (data: DeleteDtoRules): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      // logica crear role
      await this.repositoryRules.delete(data.idRules)
      return SuccessProcess('rule deleted', 201)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
