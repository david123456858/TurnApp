import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Users } from '@Entity/Users/users'

@Entity('shedules')
export class Schedules extends BaseEntity {
  @PrimaryGeneratedColumn()
    idShedules!: string

  @ManyToOne(() => Users, (user: Users) => user.schedules)
    company!: Users
}
