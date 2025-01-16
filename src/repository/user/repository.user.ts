// import userModel from '../../adapters/models/repository/users/user'
import { Users } from '../../Entity/Users/users'
import { IcrudRepository } from './../../adapters/interface/repository/crudRepository'

export class repositoryUser implements IcrudRepository<Users> {
  // esl int-disable-next-line @typescript-eslint/no-invalid-void-type
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  async save (data: Users): Promise<void | Error> {
    await Users.save(data)
  }

  async update (data: Users): Promise<any> {
    const { email, ...updateUser } = data // de esta manera separo email para poder buscar
    const result = await Users.update({ email }, updateUser)
    return result
  }

  async delete (id: string): Promise<any> {
    const resultRemoveUser = await Users.delete({ email: id })
    return resultRemoveUser
  }

  async findById (email: string): Promise<any> {
    const dataUser = await Users.findOneBy({ email })
    return dataUser
  }

  async findAll (): Promise<any> {
    const dataUsers = Users.find()
    return await dataUsers
  }

  async findByEmail (emailSend: string): Promise<any> {
    const dataUser = await Users.findOneBy({ email: emailSend })
    console.log('llegue')
    console.log(dataUser)
    return dataUser
  }
}
