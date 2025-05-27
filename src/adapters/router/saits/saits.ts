import { Router } from 'express'
import { baseRoute, router } from '../../config/routerConfig'

export const routeSaits = (): Router => {
  router.post(`${baseRoute}/create/sait`, () => {})
  return router
}
