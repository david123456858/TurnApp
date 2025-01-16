import { IsNotEmpty, IsString, Length } from 'class-validator'

export class updateUserDto {
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
}
