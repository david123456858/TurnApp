import { IcrudRepository } from '../../adapters/interface/repository/crudRepository'
import { rules } from '../../domain/rules/rules'

export class repositoryRules implements IcrudRepository<rules> {
  async save (data: rules): Promise<any> {

  }

  async update (data: rules): Promise<rules | Error> {

  }

  async delete (id: string): Promise<rules | Error> {

  }

  async findById (id: string): Promise<rules | Error | null> {

  }

  async findAll (): Promise<rules | Error | null> {

  }
}
