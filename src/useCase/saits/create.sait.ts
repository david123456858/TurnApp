/* eslint-disable @typescript-eslint/no-for-in-array */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'
import { createSaitDto } from '@Dtos/saits/createDto'
import { Saits } from '@Entity/Sait/saits'
import { repositoryRules } from '@repository/rule/repository.rule'
import { RepositorySaitRole } from '@repository/sait-role/sait-role'
import { RepositorySaits } from '@repository/saits/repository.saits'
import { repositoryUser } from '@repository/user/repository.user'

export class CaseUseCreateSait {
  private readonly repository: RepositorySaits
  private readonly repositoryUser: repositoryUser
  private readonly repositorySaitRole: RepositorySaitRole
  private readonly repositoryRole: repositoryRules

  constructor (repository: RepositorySaits, repositoryUser: repositoryUser) {
    this.repository = repository
    this.repositoryUser = repositoryUser
    this.repositorySaitRole = new RepositorySaitRole() // esto es algo provicional
    this.repositoryRole = new repositoryRules()
  }

  async createSait (sait: createSaitDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      const userFind = await this.repositoryUser.findByEmail(sait.company)

      if (!userFind) return FailureProccess('Not found', 404)

      console.time('busqueda')
      for (const value of sait.rols) {
        const result = await this.repositoryRole.findById(value.rolId)
        if (result) console.log('no existe este')
      }
      console.timeEnd('busqueda')

      const instanceOfSait = new Saits()

      instanceOfSait.company = userFind
      instanceOfSait.address = sait.address
      instanceOfSait.city = sait.city
      instanceOfSait.nameSait = sait.nameSait
      instanceOfSait.numberEmployesForDay = sait.numberEmployesForDay

      await this.repository.save(instanceOfSait)

      return SuccessProcess('Site created successfully', 201)
    } catch (error) {
      return FailureProccess('Error creating site', 500)
    }
  }
}
