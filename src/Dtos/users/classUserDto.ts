import { IsNotEmpty, IsString } from 'class-validator'

export class userClassDto {
  @IsNotEmpty()
  @IsString()
    idUser!: string
}
