/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { IcrudRepository } from '@adapters/interface/repository/crudRepository'
import { Schedules } from '@Entity/Schedules/schedules'

export class repositorySchedule implements IcrudRepository<Schedules> {
  async save (data: Schedules): Promise<void | Error> {
    console.log('')
  }

  async update (data: Schedules): Promise<Schedules | Error> {
    return await new Promise(() => new Schedules())
  }

  async delete (id: string): Promise<Schedules | Error> {
    return await new Promise(() => new Schedules())
  }

  async findById (id: string): Promise<Schedules | Error | null> {
    return await new Promise(() => new Schedules())
  }

  async findAll (): Promise<Schedules[]> {
    return await new Promise(() => new Schedules())
  }
}
