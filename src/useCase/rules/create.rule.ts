/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IFailureProcess, ISuccessProcess } from '../../adapters/interface/results/restults'
import { FailureProccess, SuccessProcess } from '../../adapters/utils/result/resultApi'
import { Roles } from '../../Entity/Role/roles'
import { registerRuleDto } from '../../Dtos/rules/registerDtoRules'
import { repositoryRules } from '../../repository/rule/repository.rule'
import { repositoryUser } from '../../repository/user/repository.user'

export class caseUseCreated {
  private readonly repositoryRules: repositoryRules
  private readonly respositoryUsers: repositoryUser

  constructor (respositoy: repositoryRules, repositoryUser: repositoryUser) {
    this.repositoryRules = respositoy
    this.respositoryUsers = repositoryUser
  }

  // --> este es mi service crear rol pero en la arquitectura limpia se llama caso de uso
  async createRule (data: registerRuleDto): Promise<IFailureProcess<any> | ISuccessProcess<any>> {
    try {
      // logica crear role
      /**
       * Dentro de lo que cabe en el service interviene todo el procesamiento y validaciones, es decir, probar
       * que no exista ese dato y cosas similares, ¿Con que fin se hace esto? es con el de desacoplar las responsabilidades
       * es decir por la parte de el service se encarga que la informacion tenga un procesamiento adecuado,
       * correspondientemente a la logica del negocio, al igual como te explique amor, aca se utiliza un Dto
       * que es verificado en el controlador, y luego aqui es procesado, y hablo de que normalmente uno no manda
       * una serie de atributos si no clases, para eso estan, para facilicarnos la vida.
       */

      // busca el usuario al cual se le va asginar ese rol
      const findCompany = await this.respositoryUsers.findByEmail(data.company)

      if (!findCompany) return FailureProccess('not found company', 404)

      // busca si ya fue creado ese rol o existe
      const ruleFindVerify = await this.repositoryRules.findByNameRule(data.nameRule)

      if (ruleFindVerify !== null) return FailureProccess('rule already created', 409)

      /**
       * y como mencione antes se procesa la informacion es decir se crea una instancia de la clase que el
       * model esta esperando para que el solo se encargue de tener que comunicarse con la base de dato, o
       * en otras palabras recibir el argumento y guardarlo o buscarlo etc...
       */
      const rule = new Roles()
      rule.nameRole = data.nameRule
      rule.description = data.description
      rule.company = findCompany
      rule.idRole = data.idRule

      /**
       * y aqui finalmente solo se llama a reposotorio o como lo conocemos el model para mandar por parametro lo que
       * espera
       */
      await this.repositoryRules.save(rule)

      return SuccessProcess('rule created', 201)
    } catch (error) {
      return FailureProccess('error internal server', 500)
    }
  }
}
