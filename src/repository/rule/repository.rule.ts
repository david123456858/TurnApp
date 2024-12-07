import { IcrudRepository } from '../../adapters/interface/repository/crudRepository'
import { rules } from '../../domain/rules/rules'

export class repositoryRules implements IcrudRepository<rules> {
  async save (data: rules): Promise<any> {
  }

  async update (data: rules): Promise<any> {

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
