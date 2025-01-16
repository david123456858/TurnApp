/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { repositoryUser } from '../../../repository/user/repository.user'
import { CaseUseDeleteUser } from '../../../useCase/users/user.delete'
import { CaseUseFindUsers } from '../../../useCase/users/user.find'
import { baseRoute, router } from '../../config/routerConfig'
import { controllerUserCrud } from '../../controller/user/userController'
import { CaseUseUpdateUser } from '../../../useCase/users/user.update'
import { caseUseFindByEmail } from '../../../useCase/users/user.findById'
import { validateDtos } from '../../middleware/validate'
import { updateUserDto } from '../../../Dtos/users/userUpdateDto'

export const routeUser = (): Router => {
  const respository = new repositoryUser()

  const caseUseUserDelete = new CaseUseDeleteUser(respository)
  const caseUseUserFind = new CaseUseFindUsers(respository)
  const caseUseUserUpdate = new CaseUseUpdateUser(respository)
  const caseUseUserFindByEmail = new caseUseFindByEmail(respository)

  const controller = new controllerUserCrud(
    caseUseUserDelete,
    caseUseUserUpdate,
    caseUseUserFind,
    caseUseUserFindByEmail
  )

  router.get(`${baseRoute}/users`, controller.findUsers)
  router.get(`${baseRoute}/user/:id`, controller.findById)
  router.delete(`${baseRoute}/userDeleted/:id`, controller.userDelete)
  router.put(`${baseRoute}/updateUser`, validateDtos(updateUserDto), controller.UpdateUser)

  return router
}
