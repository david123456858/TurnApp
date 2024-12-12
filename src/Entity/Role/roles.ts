import { BaseEntity, Column, PrimaryColumn } from 'typeorm'

export class roles extends BaseEntity {
  @PrimaryColumn()
    idRole!: string

  @Column({ type: 'varchar2' })
    nameRole!: string

  @Column({ type: 'varchar2' })
    description!: string

  // relacion a que compañia pertenece este rol
}
