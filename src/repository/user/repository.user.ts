// import userModel from '../../adapters/models/repository/users/user'
import { Users } from '@Entity/Users/users'
import { IcrudRepository } from '@adapters/interface/repository/crudRepository'

export class repositoryUser implements IcrudRepository<Users> {
  // esl int-disable-next-line @typescript-eslint/no-invalid-void-type
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  async save (data: Users): Promise<void | Error> {
    await Users.save(data)
  }

  async update (data: Users): Promise<any> {
    await Users.findOneBy({ email: data.email })
    const result = await Users.save(data)
    return result
  }

  async delete (id: string): Promise<any> {
    const resultRemoveUser = await Users.delete({ email: id })
    return resultRemoveUser
  }

  async findById (email: string): Promise<Users | null> {
    const dataUser = await Users.findOne({ where: { email }, relations: { roles: true, saits: true, schedules: true } })
    return dataUser
  }

  async findAll (): Promise<Users[]> {
    const dataUsers = await Users.find({ relations: { roles: true } })
    return dataUsers
  }

  async findByEmail (emailSend: string): Promise<Users | null> {
    const dataUser = await Users.findOneBy({ email: emailSend })
    return dataUser
  }
}
