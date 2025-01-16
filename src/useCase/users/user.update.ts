/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { registerDto } from '../../Dtos/auth/registerDtos'
import { Users } from '../../Entity/Users/users'
import { repositoryUser } from '../../repository/user/repository.user'

export class CaseUseUpdateUser {
  private readonly repostitory: repositoryUser

  constructor (repositorysUser: repositoryUser) {
    this.repostitory = repositorysUser
  }

  async UpdateUser (user: registerDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      const userFind = await this.repostitory.findByEmail(user.email)
      if (!userFind) return FailureProccess('Not found', 404)

      if (user === null) return FailureProccess('Inprocessible entity', 422)

      if (user === undefined) return FailureProccess('Inprocessible entity', 422)
      const userSave = new Users()

      userSave.nit = user.nit
      userSave.email = user.email
      userSave.nameCompany = user.nameCompany
      userSave.numberPhone = user.numberPhone

      const result = await this.repostitory.update(userSave)
      console.log(result)

      return SuccessProcess('User Updated', 200)
    } catch (error) {
      return FailureProccess('Error internar server', 500)
    }
  }
}
