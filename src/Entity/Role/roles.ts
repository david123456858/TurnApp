import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Users } from '@Entity/Users/users'

@Entity('Roles')
export class Roles extends BaseEntity {
  @PrimaryGeneratedColumn()
    idRole!: string

  @Column({ type: 'varchar' })
    nameRole!: string

  @Column({ type: 'varchar' })
    description!: string

  // relacion a que compañia pertenece este rol
  @ManyToOne(() => Users, (user: Users) => user.roles)
    company!: Users
}
