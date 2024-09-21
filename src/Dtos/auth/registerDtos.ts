import { IsNotEmpty, IsString, Length } from 'class-validator'

export class registerDto {
  @IsString()
  @IsNotEmpty()
    email!: string

  @IsString()
  @IsNotEmpty()
  @Length(8, 30)
    password!: string

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
