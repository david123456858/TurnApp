import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { Users } from '../Users/users'
import { Employes } from '../Employes/employes'

@Entity('Saits')
export class Saits extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
    idSaits!: string

  @Column({ type: 'varchar' })
    nameSait!: string

  @Column({ type: 'varchar' })
    address!: string

  @Column({ type: 'numeric' })
    numberEmployesForDay!: number

  @ManyToOne(() => Users, (user: Users) => user.saits)
    company!: Users

  // Una sede tiene muchos empleados
  @OneToMany(() => Employes, (employes: Employes) => employes.saits)
    employes!: Employes[]
}
