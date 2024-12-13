import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Users } from '../Users/users'

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
  // relacion con la compañia correspondienteS
}
