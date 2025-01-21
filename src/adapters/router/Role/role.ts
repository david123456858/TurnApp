/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { repositoryUser } from './../../../repository/user/repository.user'
import { baseRoute, router } from '../../config/routerConfig'
import { repositoryRules } from '../../../repository/rule/repository.rule'
import { caseUseCreated } from '../../../useCase/rules/create.rule'
import { caseUseDeletedRole } from '../../../useCase/rules/delete.rule'
import { caseUseFindsRoles } from '../../../useCase/rules/fing.rules'
import { CaseUseFindById } from '../../../useCase/rules/findById'
import { controllerRoles } from '../../controller/roles/rolesController'
import { validateDtos } from '../../middleware/validate'
import { registerRuleDto } from '../../../Dtos/rules/registerDtoRules'

export const routeRoles = (): Router => {
  const repositoryRoles = new repositoryRules()
  const repository = new repositoryUser()

  const caseUseSaveRole = new caseUseCreated(repositoryRoles, repository)
  const caseUseDeleted = new caseUseDeletedRole(repositoryRoles)
  const caseUseFindsRols = new caseUseFindsRoles(repositoryRoles)
  const caseUseFindByIdRoles = new CaseUseFindById(repositoryRoles)

  const controller = new controllerRoles(caseUseSaveRole, caseUseDeleted, caseUseFindsRols, caseUseFindByIdRoles)

  router.post(`${baseRoute}/create/role`, validateDtos(registerRuleDto), controller.createdRoles)
  router.get('', () => {})
  router.get('', () => {})
  router.delete('', () => {})

  return router
}
