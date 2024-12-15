import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Users } from '../Users/users'

@Entity('shedules')
export class Schedules extends BaseEntity {
  @PrimaryColumn()
    idShedules!: string

  @ManyToOne(() => Users, (user: Users) => user.schedules)
    company!: Users
}
