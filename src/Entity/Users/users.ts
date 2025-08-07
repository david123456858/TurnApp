import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany } from 'typeorm'

import { Roles } from '@Entity/Role/roles'
import { Saits } from '@Entity/Sait/saits'
import { Schedules } from '@Entity/Schedules/schedules'
import { Employes } from '@Entity/Employes/employes'

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
    saits!: Saits[]

  @OneToMany(() => Schedules, (schedules: Schedules) => schedules.company)
    schedules!: Schedules[]
  
  @OneToMany(() => Employes, (employes:Employes) => employes.company)
  employes!: Employes[] 
  
}
