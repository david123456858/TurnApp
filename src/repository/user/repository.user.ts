import userModel from '../../adapters/models/repository/users/user'
import { User } from '../../domain/users/users'
import { IcrudRepository } from './../../adapters/interface/repository/crudRepository'

export class repositoryUser implements IcrudRepository<User> {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  async save (data: User): Promise<void | Error> {
    await userModel.create(data)
    console.log('se guardo correctamente el usuario')
  }

  async update (data: User): Promise<any> {
    const result = userModel.findOneAndUpdate({ email: data.email }, { $set: data }, { new: true })
    return await result
  }

  async delete (id: string): Promise<any> {
    const resultRemoveUser = userModel.deleteOne({ nit: id })
    return await resultRemoveUser
  }

  async findById (id: string): Promise<any> {
    const dataUser = userModel.findOne({ nit: id })
    return await dataUser
  }

  async findAll (): Promise<any> {
    const dataUsers = await userModel.find()
    console.log(dataUsers)
    return dataUsers
  }

  async findByEmail (emailSend: string): Promise<any> {
    const resultSearchEmail = userModel.findOne({ email: emailSend })
    return await resultSearchEmail
  }
}
