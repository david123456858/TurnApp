import userModel from '../../adapters/models/repository/users/user'
import { User } from '../../domain/users/users'
import { IcrudRepository } from './../../adapters/interface/repository/crudRepository'

export class repositoryUser implements IcrudRepository<User> {
  async save (data: User): Promise<void | Error> {
    await userModel.create(data)
    console.log('se guardo correctamente el usuario')
  }

  async update (data: User): Promise<any> {

  }

  async delete (id: string): Promise<any> {}

  async findById (id: string): Promise<any> {
    const dataUser = userModel.findOne({ nit: id })
    return await dataUser
  }

  async findAll (): Promise<any> {}
}
