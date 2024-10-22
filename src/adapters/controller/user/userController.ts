import { NextFunction, Request, Response } from 'express'
import { CaseUseDeleteUser } from '../../../useCase/users/user.delete'
import { CaseUseUpdateUser } from '../../../useCase/users/user.update'
import { CaseUseFindUsers } from '../../../useCase/users/user.find'

export class controllerUserCrud {
  caseUseUser: CaseUseDeleteUser
  caseUseUserUpdate: CaseUseUpdateUser
  caseUseFindUser: CaseUseFindUsers

  constructor (caseUseDelete: CaseUseDeleteUser, caseUseUpdate: CaseUseUpdateUser, caseUseFindUser: CaseUseFindUsers) {
    this.caseUseUser = caseUseDelete
    this.caseUseUserUpdate = caseUseUpdate
    this.caseUseFindUser = caseUseFindUser

    this.findById = this.UpdateUser.bind(this)
    this.findUsers = this.findUsers.bind(this)
    this.userDelete = this.userDelete.bind(this)
    this.UpdateUser = this.UpdateUser.bind(this)
  }

  async userDelete (req: Request, res: Response, next: NextFunction): Promise<any> {

  }

  async findUsers (req: Request, res: Response, next: NextFunction): Promise<any> {
    const users = await this.caseUseFindUser.findUsers()
    if (!users.success) {
      const error = {
        statusCode: users.status,
        error: users.error
      }
      next(error)
    }
    res.status(users.status).json(users)
  }

  async findById (req: Request, res: Response, next: NextFunction): Promise<any> {

  }

  async UpdateUser (req: Request, res: Response, next: NextFunction): Promise<any> {
    const users = await this.caseUseFindUser.findUsers()

    if (!users.success) {
      const error = {
        statusCode: users.status,
        error: users.error
      }
      next(error)
    }
    res.status(users.status).json(users.success)
  }
}
