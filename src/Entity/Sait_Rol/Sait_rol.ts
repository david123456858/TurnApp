import { BaseEntity, PrimaryGeneratedColumn, Entity, ManyToOne, Column } from 'typeorm'

import { Saits } from '@Entity/Sait/saits'
import { Roles } from '@Entity/Role/roles'

@Entity('Sait_Rol')
export class SaitRol extends BaseEntity {
  @PrimaryGeneratedColumn()
    idSaitRol!: string

  @ManyToOne(() => Roles, (rol: Roles) => rol.saitsRol)
    rol!: Roles

  @ManyToOne(() => Saits, (saits: Saits) => saits.rolNecesary)
    saits!: Saits

  @Column({ type: 'numeric' })
    numberRolNecessary!: number
}
