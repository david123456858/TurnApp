/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { convertInfoUser } from '../../adapters/utils/usersInfoConver/userInfo'
import { repositoryUser } from '../../repository/user/repository.user'

export class caseUseFindByEmail {
  private readonly repository: repositoryUser

  constructor (respository: repositoryUser) {
    this.repository = respository
  }

  async findByEmail (emailUser: string): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      if (emailUser === null) return FailureProccess('Bad Request', 403)

      if (emailUser === undefined) return FailureProccess('Bad Request', 403)
      // mejorable
      const userFind = await this.repository.findById(emailUser)

      if (!userFind) return FailureProccess('user dont exist', 404)

      const user = convertInfoUser(userFind)

      return SuccessProcess(user, 200)
    } catch (error) {
      return FailureProccess('Error internar server', 500)
    }
  }
}
