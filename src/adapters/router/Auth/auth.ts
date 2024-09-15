import { Router } from 'express'
import { baseRoute, router } from '../../config/routerConfig'

export const routerAuth = (): Router => {
  router.post(`${baseRoute}/loggin`)
  router.post(`${baseRoute}/register`)

  return router
}
