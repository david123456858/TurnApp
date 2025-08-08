/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { IcrudRepository } from '@interface/repository/crudRepository'
import { Saits } from '@Entity/Sait/saits'

export class RepositorySaits implements IcrudRepository<Saits> {
  async save (data: Saits): Promise<void | Error> {
    await Saits.save(data)
  }

  async update (data: Saits): Promise<any> {
    const { idSaits, ...sait } = data
    const udpateSait = await Saits.update({ idSaits }, sait)
    return udpateSait
  }

  async delete (id: string): Promise<any> {
    const saitDeleted = await Saits.delete({ idSaits: id })
    return saitDeleted
  }

  async findById (id: string): Promise<Saits | Error | null> {
    const saitSearch = await Saits.findOne({ where: { idSaits: id }, relations: {} })
    return saitSearch
  }

  async findAll (): Promise<Saits[]> {
    const saits = await Saits.find()
    return saits
  }
}
