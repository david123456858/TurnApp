import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Saits } from '@Entity/Sait/saits'

@Entity('Employes')
export class Employes extends BaseEntity {
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
}
