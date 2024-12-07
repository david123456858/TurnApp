// import userModel from '../../adapters/models/repository/users/user'
import { User } from '../../domain/users/users'
import { IcrudRepository } from './../../adapters/interface/repository/crudRepository'

export class repositoryUser implements IcrudRepository<User> {
  // esl int-disable-next-line @typescript-eslint/no-invalid-void-type
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  async save (data: User): Promise<void | Error> {

  }

  async update (data: User): Promise<any> {
    const result = ''
    return result
  }

  async delete (id: string): Promise<any> {
    const resultRemoveUser = 'userModel.deleteOne({ nit: id })'
    return resultRemoveUser
  }

  async findById (id: string): Promise<any> {
    const dataUser = 'userModel.findOne({ nit: id })'
    return dataUser
  }

  async findAll (): Promise<any> {
    const dataUsers = ' userModel.find()'
    console.log(dataUsers)
    return dataUsers
  }

  async findByEmail (emailSend: string): Promise<any> {
    const resultSearchEmail = 'userModel.findOne({ email: emailSend })'
    return resultSearchEmail
  }
}
