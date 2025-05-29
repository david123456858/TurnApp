import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
/**
 * Case use for the funtions the find all saits wich it campany comrresponset
 * En palabras españolas metodo que realiza las busquedas de las sedes de la empresa
 * que solicito
 *
 */
export class CaseUseFindSaits {
  async findSaits (): Promise<ISuccessProcess<any> | IFailureProcess<any>> {
    try {
      return SuccessProcess('', 200)
    } catch (error) {
      return FailureProccess('', 500)
    }
  }
}
