import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Index } from 'typeorm'

import { Employes } from '@Entity/Employes/employes'
import { SaitRol } from '@Entity/Sait_Rol/Sait_rol'
import { Users } from '@Entity/Users/users'

@Entity('Saits')
export class Saits extends BaseEntity {
  @PrimaryGeneratedColumn()
    idSaits!: string

  @Index()
  @Column({ type: 'varchar' })
    nameSait!: string

  @Column({ type: 'varchar' })
    city!: string

  @Column({ type: 'varchar' })
    address!: string

  @Column({ type: 'numeric' })
    numberEmployesForDay!: number // revisar porque no hay contexto de que rol de empleado se necesita

  @ManyToOne(() => Users, (user: Users) => user.saits)
    company!: Users

  @ManyToOne(() => SaitRol, (saitRol: SaitRol) => saitRol.saits)
    rolNecesary!: SaitRol

  // Una sede tiene muchos empleados
  @OneToMany(() => Employes, (employes: Employes) => employes.saits)
    employes!: Employes[]
}
