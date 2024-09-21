import { IsNotEmpty, IsString, Length } from 'class-validator'

export class logginDto {
  @IsNotEmpty()
  @IsString()
    email!: string

  @IsNotEmpty()
  @Length(8, 30)
    password!: string
}
