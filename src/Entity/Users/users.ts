import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm'

@Entity()
export class users extends BaseEntity {
  @PrimaryColumn({ type: 'varchar2' })
    email!: string

  @Column({ type: 'varchar2' })
    password!: string

  @Column({ type: 'varchar2', unique: true })
    nit!: string

  @Column({ type: 'varchar2' })
    nameCompany!: string

  @Column({ type: 'varchar2', unique: true })
    numberPhone!: string
}
