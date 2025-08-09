/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '@adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '@adapters/utils/result/resultApi'
import { RepositorySaits } from '@repository/saits/repository.saits'
/**
 * Case use for the funtions of find all saits wich it campany comrresponset
 * En palabras españolas metodo que realiza las busquedas de las sedes de la empresa
 * que solicito
 *
 */
export class CaseUseFindSaits {
  private readonly repository: RepositorySaits
  constructor (respository: RepositorySaits) {
    this.repository = respository
  }

  async findSaits (): Promise<ISuccessProcess<any> | IFailureProcess<any>> {
    try {
      const resultOfFindAllSaits = await this.repository.findAll()

      if (!resultOfFindAllSaits) return FailureProccess('Not Found', 404)

      return SuccessProcess(resultOfFindAllSaits, 200)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
