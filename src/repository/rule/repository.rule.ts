import { IcrudRepository } from '../../adapters/interface/repository/crudRepository'
import { Roles } from '../../Entity/Role/roles'

export class repositoryRules implements IcrudRepository<Roles> {
  async save (data: Roles): Promise<any> {
    await Roles.save(data)
  }

  async update (data: Roles): Promise<any> {

  }

  async delete (id: string): Promise<any> {

  }

  async findById (id: string): Promise<any> {

  }

  async findAll (): Promise<any> {

  }

  async findByNameRule (data: string): Promise<any> {

  }
}
