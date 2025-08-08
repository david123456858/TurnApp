/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { router } from '@config/routerConfig'
import { validateDtos } from '@adapters/middleware/validate'
import { createSaitDto } from '@Dtos/saits/createDto'
import { RepositorySaits } from '@repository/saits/repository.saits'
import { CaseUseCreateSait } from '@useCase/saits/create.sait'
import { ControllerSaits } from '@controller/saits/saits'
import { repositoryUser } from '@repository/user/repository.user'

export const routeSaits = (prefix: string): Router => {
  const repository = new RepositorySaits()
  const InstanceRespositoryUser = new repositoryUser()

  const caseUseCreate = new CaseUseCreateSait(repository, InstanceRespositoryUser)
  const controllerSaits = new ControllerSaits(caseUseCreate)



  router.post(`${prefix}`, validateDtos(createSaitDto), controllerSaits.createSait)
  router.get(`${prefix}`, () => {})
  router.get(`${prefix}/:id`, () => {})
  router.put(`${prefix}/:id`, () => {})
  router.patch(`${prefix}/`, () => {})
  router.delete(`${prefix}/:id`, () => {})

  return router
}
