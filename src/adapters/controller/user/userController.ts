import { NextFunction, Request, Response } from 'express'
import { CaseUseDeleteUser } from '../../../useCase/users/user.delete'
import { CaseUseUpdateUser } from '../../../useCase/users/user.update'
import { CaseUseFindUsers } from '../../../useCase/users/user.find'
import { caseUseFindByEmail } from '../../../useCase/users/user.findById'

export class controllerUserCrud {
  caseUseUser: caseUseFindByEmail
  caseUseUserUpdate: CaseUseUpdateUser
  caseUseFindUser: CaseUseFindUsers
  caseUseDeleted: CaseUseDeleteUser

  constructor (caseUseDelete: CaseUseDeleteUser, caseUseUpdate: CaseUseUpdateUser, caseUseFindUser: CaseUseFindUsers, caseUseFindByEmail: caseUseFindByEmail) {
    this.caseUseUser = caseUseFindByEmail
    this.caseUseUserUpdate = caseUseUpdate
    this.caseUseFindUser = caseUseFindUser
    this.caseUseDeleted = caseUseDelete

    this.findById = this.findById.bind(this)
    this.findUsers = this.findUsers.bind(this)
    this.userDelete = this.userDelete.bind(this)
    this.UpdateUser = this.UpdateUser.bind(this)
  }

  async userDelete (req: Request, res: Response, next: NextFunction): Promise<any> {
    const idUser = req.params.id
    const userDeleted = await this.caseUseDeleted.deleteUser(idUser)
    if (!userDeleted.success) {
      const error = {
        statusCode: userDeleted.status,
        error: userDeleted.error
      }
      return next(error)
    }
    res.status(userDeleted.status).json(userDeleted.value)
  }

  async findUsers (req: Request, res: Response, next: NextFunction): Promise<any> {
    const users = await this.caseUseFindUser.findUsers()
    if (!users.success) {
      const error = {
        statusCode: users.status,
        error: users.error
      }
      return next(error)
    }
    res.status(users.status).json(users.value)
  }

  async findById (req: Request, res: Response, next: NextFunction): Promise<any> {
    const user = await this.caseUseUser.findByEmail(req.params.id)

    if (!user.success) {
      const error = {
        statusCode: user.status,
        error: user.error
      }
      return next(error)
    }
    res.status(user.status).json(user.value)
  }

  async UpdateUser (req: Request, res: Response, next: NextFunction): Promise<any> {
    const usersBody = req.body

    const users = await this.caseUseUserUpdate.UpdateUser(usersBody)

    if (!users.success) {
      const error = {
        statusCode: users.status,
        error: users.error
      }
      return next(error)
    }
    res.status(users.status).json({ message: users.value })
  }
}
