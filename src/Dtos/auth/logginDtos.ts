import { IsNotEmpty, IsString, Length } from 'class-validator'

export class logginDto {
  @IsNotEmpty()
  @IsString()
  @Length(10, 10)
    email!: string

  @IsNotEmpty()
  @Length(8, 30)
    password!: string
}
