import { Router } from 'express'

export const baseRoute = '/api/v1'

export const PREFIX_ROUTE = {
  ROLES: '/roles',
  USERS: '/users',
  SAITS: '/saits',
  SCHEDULE: '/schedule',
  AUTH: '/auth'
} as const

/**
 * this as const do not allow to change the value of the object
 * and the value of the object is not a string, it is a string literal
 */

export const router = Router()
