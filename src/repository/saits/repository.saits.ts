/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { IcrudRepository } from '@interface/repository/crudRepository'
import { Saits } from '@Entity/Sait/saits'

export class RepositorySaits implements IcrudRepository<Saits> {
  async save (data: Saits): Promise<void | Error> {
    await Saits.save(data)
  }

  async update (data: Saits): Promise<any> {
    const { idSaits, ...sait } = data
    return await Saits.update({ idSaits }, sait)
  }

  async delete (id: string): Promise<any> {
    return await Saits.delete({ idSaits: id })
  }

  async findById (id: string): Promise<Saits | Error | null> {
    return await Saits.findOne({ where: { idSaits: id }, relations: {} })
  }

  async findAll (): Promise<Saits[]> {
    return await Saits.find()
  }

  async findByName (name: string): Promise<Saits | null> {
    return await Saits.findOne({ where: { nameSait: name } })
  }
}
