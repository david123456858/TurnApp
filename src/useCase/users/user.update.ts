import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { repositoryUser } from '../../repository/user/repository.user'

export class CaseUseUpdateUser {
  private readonly repostitory: repositoryUser
  constructor (repositorysUser: repositoryUser) {
    this.repostitory = repositorysUser
  }

  async deleteUser (idUser: string): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      if (idUser === null) return FailureProccess('Inprocessible entity', 422)

      if (idUser === undefined) return FailureProccess('Inprocessible entity', 422)

      const userDeleted = this.repostitory.delete(idUser)

      console.log(userDeleted)

      return SuccessProcess('User deleted', 200)
    } catch (error) {
      return FailureProccess('Error internar server', 500)
    }
  }
}
