import { Router } from 'express'
import { repositoryUser } from '../../../repository/user/repository.user'
import { CaseUseDeleteUser } from '../../../useCase/users/user.delete'
import { CaseUseFindUsers } from '../../../useCase/users/user.find'
import { baseRoute, router } from '../../config/routerConfig'
import { controllerUserCrud } from '../../controller/user/userController'
import { CaseUseUpdateUser } from '../../../useCase/users/user.update'

export const routeUser = (): Router => {
  const respository = new repositoryUser()

  const caseUseUserDelete = new CaseUseDeleteUser(respository)
  const caseUseUserFind = new CaseUseFindUsers(respository)
  const caseUseUserUpdate = new CaseUseUpdateUser(respository)

  const controller = new controllerUserCrud(caseUseUserDelete, caseUseUserUpdate, caseUseUserFind)

  router.get(`${baseRoute}/users`)

  return router
}
