import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'
import { repositoryUser } from '@repository/user/repository.user'

export class CaseUseFindUsers {
  private readonly respository: repositoryUser

  constructor (repositoryUsers: repositoryUser) {
    this.respository = repositoryUsers
  }

  async findUsers (): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      const users = await this.respository.findAll()
      // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/strict-boolean-expressions
      if (!users) return FailureProccess('Error not found', 404)

      const user = users.map(({ password, ...rest }) => rest)

      return SuccessProcess(user, 200)
    } catch (error) {
      return FailureProccess('Error internal server', 500)
    }
  }
}
