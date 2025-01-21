import { Schedules } from './../../Entity/Schedules/schedules'
import { Roles } from '../../Entity/Role/roles'
import { Employes } from '../../Entity/Employes/employes'

import { IsNotEmpty, IsString, Length } from 'class-validator'

export class userInfo {
  @IsString()
  @IsNotEmpty()
    email!: string

  @IsString()
  @IsNotEmpty()
  @Length(9, 9)
    nit!: string

  @IsString()
  @IsNotEmpty()
    nameCompany!: string

  @IsString()
  @IsNotEmpty()
  @Length(10, 10)
    numberPhone!: string

  @IsNotEmpty()
    roles!: Roles[]

  @IsNotEmpty()
    schedules!: Schedules[]

  @IsNotEmpty()
    employes!: Employes[]
}
