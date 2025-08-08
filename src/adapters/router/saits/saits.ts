import { Router } from 'express'
import { router } from '@config/routerConfig'

export const routeSaits = (prefix: string): Router => {
  router.post(`${prefix}`, () => {})
  router.get(`${prefix}`, () => {})
  router.get(`${prefix}/:id`, () => {})
  router.put(`${prefix}/:id`, () => {})
  router.delete(`${prefix}/:id`, () => {})

  return router
}
