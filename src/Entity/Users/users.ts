import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany } from 'typeorm'

import { Roles } from '../Role/roles'
import { Saits } from '../Sait/saits'
import { Schedules } from '../Schedules/schedules'

@Entity('Companys')
export class Users extends BaseEntity {
  @PrimaryColumn({ type: 'varchar' })
    email!: string

  @Column({ type: 'varchar' })
    password!: string

  @Column({ type: 'varchar', unique: true })
    nit!: string

  @Column({ type: 'varchar' })
    nameCompany!: string

  @Column({ type: 'varchar', unique: true })
    numberPhone!: string

  @OneToMany(() => Roles, (roles: Roles) => roles.company)
    roles!: Roles[]

  @OneToMany(() => Saits, (saits: Saits) => saits.company)
    saits!: Saits

  @OneToMany(() => Schedules, (schedules: Schedules) => schedules.company)
    schedules!: Schedules
}
