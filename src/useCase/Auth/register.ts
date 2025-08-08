import { IFailureProcess, ISuccessProcess } from '@interface/results/restults'
import { FailureProccess, SuccessProcess } from '@utils/result/resultApi'
import { Users } from '@Entity/Users/users'
import { registerDto } from '@Dtos/auth/registerDtos'
import { repositoryUser } from '@repository/user/repository.user'
import bcryptjs from 'bcryptjs'

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
      const salt = bcryptjs.genSaltSync(10)
      const hash = bcryptjs.hashSync(user.password, salt)

      const userSave = new Users()

      userSave.nit = user.nit // hashear
      userSave.email = user.email // hashear
      userSave.nameCompany = user.nameCompany // hashear
      userSave.numberPhone = user.numberPhone // hashear
      userSave.password = hash

      await this.repository.save(userSave)
      return SuccessProcess('created user', 201)
    } catch (error) {
      return FailureProccess('Algo sucedio con esto', 500)
    }
  }
}
