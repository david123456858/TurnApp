/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { IcrudRepository } from '../../adapters/interface/repository/crudRepository'
import { Saits } from '../../Entity/Sait/saits'

export class RepositorySaits implements IcrudRepository<Saits> {
  async save (data: Saits): Promise<void | Error> {
    console.log('s')
  }

  async update (data: Saits): Promise<Saits | Error> {
    return new Saits()
  }

  async delete (id: string): Promise<Saits | Error> {
    return new Saits()
  }

  async findById (id: string): Promise<Saits | Error | null> {
    return null
  }

  async findAll (): Promise<Saits | Error | null> {
    return null
  }
}
