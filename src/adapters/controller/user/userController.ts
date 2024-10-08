import { NextFunction, Request, Response } from 'express'
import { CaseUseDeleteUser } from '../../../useCase/users/user.delete'
import { CaseUseUpdateUser } from '../../../useCase/users/user.update'

export class controllerUserCrud {
  caseUseUser: CaseUseDeleteUser
  caseUseUserUpdate: CaseUseUpdateUser

  constructor (caseUseDelete: CaseUseDeleteUser, caseUseUpdate: CaseUseUpdateUser) {
    this.caseUseUser = caseUseDelete
    this.caseUseUserUpdate = caseUseUpdate
  }

  async userDelete (req: Request, res: Response, next: NextFunction): Promise<void> {

  }
}
