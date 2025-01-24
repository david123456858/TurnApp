import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Users } from '../Users/users'

@Entity('Roles')
export class Roles extends BaseEntity {
  @PrimaryColumn('varchar')
    idRole!: string

  @Column({ type: 'varchar' })
    nameRole!: string

  @Column({ type: 'varchar' })
    description!: string

  // relacion a que compañia pertenece este rol
  @ManyToOne(() => Users, (user: Users) => user.roles)
    company!: Users
}
