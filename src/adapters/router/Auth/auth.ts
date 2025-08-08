/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { router } from '@config/routerConfig'
import { AuthController } from '@controller/auth/auth'
import { caseUseRegister } from '@useCase/Auth/register'
import { repositoryUser } from '@repository/user/repository.user'
import { validateDtos } from '@middleware/validate'
import { registerDto } from '@Dtos/auth/registerDtos'
import { logginDto } from '@Dtos/auth/logginDtos'
import { caseUserLoggin } from '@useCase/Auth/login'

export const routerAuth = (prefix: string): Router => {
  const repostitory = new repositoryUser()

  const caseUseAuthIntance = new caseUseRegister(repostitory)
  const caseUseAuthLoggin = new caseUserLoggin(repostitory)

  const controllerIntance = new AuthController(caseUseAuthIntance, caseUseAuthLoggin)

  router.post(`${prefix}/loggin`, validateDtos(logginDto), controllerIntance.loggin)
  router.post(`${prefix}/register`, validateDtos(registerDto), controllerIntance.register)

  return router
}
