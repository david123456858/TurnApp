import { Router } from 'express'
import { baseRoute, router } from '../../config/routerConfig'
import { AuthController } from '../../controller/auth/auth'
import { caseUseRegister } from '../../../useCase/Auth/register'
import { repositoryUser } from '../../../repository/user/repository.user'
import { validateDtos } from '../../middleware/validate'
import { registerDto } from '../../../Dtos/auth/registerDtos'
import { logginDto } from '../../../Dtos/auth/logginDtos'
import { caseUserLoggin } from '../../../useCase/Auth/login'

export const routerAuth = (): Router => {
  const repostitory = new repositoryUser()

  const caseUseAuthIntance = new caseUseRegister(repostitory)
  const caseUseAuthLoggin = new caseUserLoggin(repostitory)

  const controllerIntance = new AuthController(caseUseAuthIntance, caseUseAuthLoggin)

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post(`${baseRoute}/loggin`, validateDtos(logginDto), controllerIntance.loggin)

  router.post(`${baseRoute}/register`,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateDtos(registerDto), controllerIntance.register)
  // se tiene un middleware para validar lo que viene

  return router
}
