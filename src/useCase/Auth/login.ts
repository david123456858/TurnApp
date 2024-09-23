import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { logginDto } from '../../Dtos/auth/logginDtos'
import { repositoryUser } from '../../repository/user/repository.user'

export class caseUserLoggin {
  private readonly repostitory: repositoryUser

  constructor (respository: repositoryUser) {
    this.repostitory = respository
  }

  async loggin (userLoggin: logginDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      return SuccessProcess('user loged in the system', 200)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
