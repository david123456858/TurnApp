import { IcrudRepository } from '../../adapters/interface/repository/crudRepository'
import { Roles } from '../../Entity/Role/roles'

// --> este es model pero llamado como repository simplemente se cambia la denominacion sefun la arquitectura
export class repositoryRules implements IcrudRepository<Roles> {
  /**
   *
   * @param data
   * Como se menciona el repositorio o el model solo se comunica con la base de datos,
   * cuando esto ocurre así, el model espera una clase o tipo de datos procesadop es decir que solo tenga
   * que asignarlo y mandarlo a guardar sin tener que hacer otro proceso mas de igual manera con la demas
   * funcionalidades que es te caso es el parametro data que es de la clase Roles
   *export class Roles  {

      dRole!: string

      nameRole!: string

      description!: string

     // relacion a que compañia pertenece este rol
     @ManyToOne(() => Users, (user: Users) => user.roles)
       company!: Users
   }
   */
  async save (data: Roles): Promise<any> {
    await Roles.save(data)
  }

  async update (data: Roles): Promise<any> {
    const { idRole, ...updateRole } = data
    const resultQuery = await Roles.update({ idRole }, updateRole)
    return resultQuery
  }

  async delete (id: string): Promise<any> {
    const deletedRole = await Roles.delete({ idRole: id })
    return deletedRole
  }

  async findById (id: string): Promise<any> {
    const findRole = await Roles.findOneBy({ idRole: id })
    return findRole
  }

  async findAll (): Promise<any> {
    const finds = await Roles.find()
    return finds
  }

  async findByNameRule (data: string): Promise<Roles | null> {
    const findByNameRole = Roles.findOneBy({ nameRole: data })
    return await findByNameRole
  }

  async countRoles (): Promise<number> {
    const countTotal = await Roles.count()
    return countTotal
  }
}
