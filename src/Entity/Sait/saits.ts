import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Users } from '@Entity/Users/users'
import { Employes } from '@Entity/Employes/employes'

@Entity('Saits')
export class Saits extends BaseEntity {
  @PrimaryGeneratedColumn()
    idSaits!: string

  @Column({ type: 'varchar' })
    nameSait!: string

  @Column({ type: 'varchar' })
    address!: string

  @Column({ type: 'numeric' })
    numberEmployesForDay!: number // revisar porque no hay contexto de que rol de empleado se necesita

  @ManyToOne(() => Users, (user: Users) => user.saits)
    company!: Users

  // Una sede tiene muchos empleados
  @OneToMany(() => Employes, (employes: Employes) => employes.saits)
    employes!: Employes[]
}
 