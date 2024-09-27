import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { repositoryUser } from './../../repository/user/repository.user'

export class CaseUseFindUsers {
  private readonly respository: repositoryUser

  constructor (repositoryUsers: repositoryUser) {
    this.respository = repositoryUsers
  }

  async findUsers (): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      const users = this.respository.findAll()
      return SuccessProcess(users, 200)
    } catch (error) {
      return FailureProccess('Error internal server', 500)
    }
  }
}
