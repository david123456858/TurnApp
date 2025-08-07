import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Saits } from '@Entity/Sait/saits'
import { Users } from '@Entity/Users/users'
import { Roles } from '@Entity/Role/roles'

@Entity('Employes')
export class Employes extends BaseEntity {
  // indexar los atributos necesarios e implementar eliminacion por bloque
  @PrimaryColumn()
    idEmploye!: string

  @Column()
    nameEmploye!: string

  @Column()
    numberPhone!: string

  @Column()
    experence!: string

  // muchos empleados hace parte de una sede
  @ManyToOne(() => Saits, (saits: Saits) => saits.employes)
    saits!: Saits

  // relacion entre los empleados y de que empresa son es decir: user -> employes

  @ManyToOne(() => Users, (users: Users) => users.employes)
  company!: Users

  // relacion entre los empleados y sus respectivos roles: roles -> employes

  @ManyToOne(() => Roles, (roles: Roles) => roles.employes)
  roles!: Roles
}
