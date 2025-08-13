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
import { CaseUseFindSaits } from '@useCase/saits/finds.saits'
import { CaseUseFindById } from '@useCase/saits/findById'
import { CaseUseDeleteSait } from '@useCase/saits/delete.saits'
import { CaseUseUpdateSaits } from '@useCase/saits/update.sait'

export const routeSaits = (prefix: string): Router => {
  const repository = new RepositorySaits()
  const InstanceRespositoryUser = new repositoryUser()

  const caseUseCreate = new CaseUseCreateSait(repository, InstanceRespositoryUser)
  const caseUseFind = new CaseUseFindSaits(repository)
  const caseUseFindById = new CaseUseFindById(repository)
  const caseUseDelete = new CaseUseDeleteSait(repository)
  const caseUseUpdate = new CaseUseUpdateSaits(repository)

  const controllerSaits = new ControllerSaits(
    caseUseCreate,
    caseUseFind,
    caseUseFindById,
    caseUseDelete,
    caseUseUpdate)

  router.post(`${prefix}`, validateDtos(createSaitDto), controllerSaits.createSait)
  router.get(`${prefix}`, controllerSaits.getSaits)
  router.get(`${prefix}/:id`, controllerSaits.getByIdSait)
  router.put(`${prefix}`, controllerSaits.updateSait)
  router.delete(`${prefix}/:id`, controllerSaits.deleteSait)
  // ruta para poder actualizar cuales son los roles que se necesitan en esa sede
  router.patch(`${prefix}`, () => {})

  return router
}
