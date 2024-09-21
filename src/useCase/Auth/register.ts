import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { User } from '../../domain/users/users'
import { registerDto } from '../../Dtos/auth/registerDtos'
import { repositoryUser } from '../../repository/user/repository.user'

export class caseUseRegister {
  private readonly repository: repositoryUser
  constructor (UserRepository: repositoryUser) {
    this.repository = UserRepository
  }

  async register (user: registerDto): Promise<IFailureProcess<any> | ISuccessProcess<any> > {
    try {
      const userSearchOne = await this.repository.findById(user.nit)

      if (userSearchOne !== null) {
        return FailureProccess('El usuario ya se encuentra registrado', 409)
      }
      const userSave = new User()
      userSave.nit = user.nit
      userSave.email = user.email
      userSave.nameCompany = user.nameCompany
      userSave.numberPhone = user.numberPhone
      userSave.password = user.password

      await this.repository.save(userSave)
      return SuccessProcess('created user', 200)
    } catch (error) {
      return FailureProccess('Algo sucedio con esto', 500)
    }
  }
}
