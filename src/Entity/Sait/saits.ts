import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'
@Entity()
export class saits extends BaseEntity {
  @PrimaryColumn({ type: 'varchar2' })
    idSaits!: string

  @Column({ type: 'varchar2' })
    nameSait!: string

  @Column({ type: 'varchar2' })
    address!: string

  @Column({ type: 'varchar2' })
    numberEmployesForDay!: string

  // relacion con la compañia correspondienteS
}
