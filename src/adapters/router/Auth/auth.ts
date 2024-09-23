import { Router } from 'express'
import { baseRoute, router } from '../../config/routerConfig'
import { AuthController } from '../../controller/auth/auth'
import { caseUseRegister } from '../../../useCase/Auth/register'
import { repositoryUser } from '../../../repository/user/repository.user'

export const routerAuth = (): Router => {
  const repostitory = new repositoryUser()

  const caseUseAuthIntance = new caseUseRegister(repostitory)
  const controllerIntance = new AuthController(caseUseAuthIntance)

  router.post(`${baseRoute}/loggin`)
  router.post(`${baseRoute}/register`, controllerIntance.register)

  return router
}
