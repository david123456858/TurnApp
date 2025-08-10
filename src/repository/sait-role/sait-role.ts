/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { IcrudRepository } from '@adapters/interface/repository/crudRepository'
import { SaitRol } from '@Entity/Sait_Rol/Sait_rol'

export class RepositorySaitRole implements IcrudRepository<SaitRol> {
  async save (data: SaitRol): Promise<void | Error> {
    await SaitRol.save(data)
  }

  async update (data: SaitRol): Promise<SaitRol | Error> {
    return new SaitRol()
  }

  async delete (id: string): Promise<any> {
    return await SaitRol.delete({ idSaitRol: id })
  }

  async findById (id: string): Promise<SaitRol | Error | null> {
    return await SaitRol.findOne({ where: { idSaitRol: id } })
  }

  async findAll (): Promise<Error | SaitRol[] | null> {
    return await SaitRol.find()
  }
}
