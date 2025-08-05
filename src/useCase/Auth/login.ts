import bcryptjs from 'bcryptjs'
import { IFailureProcess, ISuccessProcess } from '@interface/results/restults'
import { FailureProccess, SuccessProcess } from '@utils/result/resultApi'
import { logginDto } from '@Dtos/auth/logginDtos'
import { repositoryUser } from '@repository/user/repository.user'

export class caseUserLoggin {
  private readonly repostitory: repositoryUser

  constructor (respository: repositoryUser) {
    this.repostitory = respository
  }

  async loggin (userLoggin: logginDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      const userLogged = await this.repostitory.findByEmail(userLoggin.email)

      // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/strict-boolean-expressions
      if (!userLogged) return FailureProccess('Not found', 404)

      const comparePassword = bcryptjs.compareSync(userLoggin.password, userLogged.password)

      // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/strict-boolean-expressions
      if (!comparePassword) return FailureProccess('User Not found', 404)
      const { password, ...rest } = userLogged

      return SuccessProcess(rest, 200)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
