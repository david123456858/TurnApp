import { Router } from 'express'
import { baseRoute, router } from '../../config/routerConfig'
import { AuthController } from '../../controller/auth/auth'
import { caseUseRegister } from '../../../useCase/Auth/register'
import { repositoryUser } from '../../../repository/user/repository.user'
import { validateDtos } from '../../middleware/validate'
import { registerDto } from '../../../Dtos/auth/registerDtos'

export const routerAuth = (): Router => {
  const repostitory = new repositoryUser()

  const caseUseAuthIntance = new caseUseRegister(repostitory)
  const controllerIntance = new AuthController(caseUseAuthIntance)

  router.post(`${baseRoute}/loggin`)

  router.post(`${baseRoute}/register`,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    validateDtos(registerDto),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    controllerIntance.register) // se tiene un middleware para validar lo que viene

  return router
}
