import { IsNotEmpty, IsString } from 'class-validator'
import { Users } from '../../Entity/Users/users'

export class UpdateRolDto {
  @IsNotEmpty()
  @IsString()
    nameRule!: string

  @IsString()
    description!: string

  @IsNotEmpty()
  @IsString()
    company!: Users
}
