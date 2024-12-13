import { BaseEntity, Entity, PrimaryColumn } from 'typeorm'

@Entity('Employes')
export class Employes extends BaseEntity {
  @PrimaryColumn()
    idEmploye!: string
}
