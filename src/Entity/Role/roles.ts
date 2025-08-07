import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Users } from '@Entity/Users/users'
import { Employes } from '@Entity/Employes/employes'

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

  // relacion entre los roles y los empleados que tienen este rol
  @OneToMany(() => Employes, (employes: Employes) => employes.roles)
    employes!: Employes[]
}
