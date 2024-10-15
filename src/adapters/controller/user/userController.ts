import { NextFunction, Request, Response } from 'express'
import { CaseUseDeleteUser } from '../../../useCase/users/user.delete'
import { CaseUseUpdateUser } from '../../../useCase/users/user.update'

export class controllerUserCrud {
  caseUseUser: CaseUseDeleteUser
  caseUseUserUpdate: CaseUseUpdateUser

  constructor (caseUseDelete: CaseUseDeleteUser, caseUseUpdate: CaseUseUpdateUser) {
    this.caseUseUser = caseUseDelete
    this.caseUseUserUpdate = caseUseUpdate

    this.findById = this.UpdateUser.bind(this)
    this.findUsers = this.findUsers.bind(this)
    this.userDelete = this.userDelete.bind(this)
    this.UpdateUser = this.UpdateUser.bind(this)
  }

  async userDelete (req: Request, res: Response, next: NextFunction): Promise<any> {

  }

  async findUsers (req: Request, res: Response, next: NextFunction): Promise<any> {

  }

  async findById (req: Request, res: Response, next: NextFunction): Promise<any> {

  }

  async UpdateUser (req: Request, res: Response, next: NextFunction): Promise<any> {

  }
}
