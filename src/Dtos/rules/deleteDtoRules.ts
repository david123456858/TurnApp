import { IsNotEmpty, IsString } from 'class-validator'

export class DeleteDtoRules {
  @IsNotEmpty()
  @IsString()
    idRules!: string
}
