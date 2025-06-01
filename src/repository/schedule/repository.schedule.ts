import { IcrudRepository } from '../../adapters/interface/repository/crudRepository'
import { Schedules } from '../../Entity/Schedules/schedules'

export class repositorySchedule implements IcrudRepository<Schedules> {
  async save (data: Schedules): Promise<void | Error> {
    console.log('')
  }

  update (data: Schedules): Promise<Schedules | Error>{ 

  }
  delete (id: string): Promise<Schedules | Error>{}
  findById (id: string): Promise<Schedules | Error | null>{}
  findAll (): Promise<Schedules | Error | null>{

  }
|