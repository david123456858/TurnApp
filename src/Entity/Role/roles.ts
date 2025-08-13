import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Users } from '@Entity/Users/users'
import { Saits } from '@Entity/Sait/saits'
import { SaitRol } from '@Entity/Sait_Rol/Sait_rol'

@Entity('Roles')
export class Roles extends BaseEntity {
  @PrimaryGeneratedColumn()
    idRole!: string

  @Column({ type: 'varchar', unique: true })
    nameRole!: string

  @Column({ type: 'varchar' })
    description!: string

  // relacion a que compañia pertenece este rol
  @ManyToOne(() => Users, (user: Users) => user.roles)
    company!: Users

  @OneToMany(() => SaitRol, (saits: SaitRol) => saits.rol)
    saitsRol!: Saits[]
}
