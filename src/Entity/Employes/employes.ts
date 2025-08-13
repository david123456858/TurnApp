import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Saits } from '@Entity/Sait/saits'

@Entity('Employes')
export class Employes extends BaseEntity {
  // indexar los atributos necesarios e implementar eliminacion por bloque
  @PrimaryColumn()
    idEmploye!: string

  @Column()
    nameEmploye!: string

  @Column()
    numberPhone!: string

  @Column()
    experence!: string

  // muchos empleados hace parte de una sede
  @ManyToOne(() => Saits, (saits: Saits) => saits.employes)
    saits!: Saits

  // relacion entre los empleados y de que empresa son es decir: user -> employes

  // relacion entre los empleados y sus respectivos roles: roles -> employes
}
