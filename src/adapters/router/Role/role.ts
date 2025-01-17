import { Router } from 'express'
import { router } from '../../config/routerConfig'
import { repositoryRules } from '../../../repository/rule/repository.rule'
import { caseUseCreated } from '../../../useCase/rules/create.rule'
import { caseUseDeletedRole } from '../../../useCase/rules/delete.rule'
import { caseUseFindsRoles } from '../../../useCase/rules/fing.rules'
import { CaseUseFindById } from '../../../useCase/rules/findById'
import { controllerRoles } from '../../controller/roles/rolesController'

export const routeRoles = (): Router => {
  const repositoryRoles = new repositoryRules()

  const caseUseSaveRole = new caseUseCreated(repositoryRoles)
  const caseUseDeleted = new caseUseDeletedRole(repositoryRoles)
  const caseUseFindsRols = new caseUseFindsRoles(repositoryRoles)
  const caseUseFindByIdRoles = new CaseUseFindById(repositoryRoles)

  const controller = new controllerRoles(caseUseSaveRole, caseUseDeleted, caseUseFindsRols, caseUseFindByIdRoles)

  router.post('', () => {})
  router.get('', () => {})
  router.get('', () => {})
  router.delete('', () => {})

  return router
}
