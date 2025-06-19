import { IsNotEmpty, IsString } from 'class-validator'

export class registerRuleDto {
  @IsNotEmpty()
  @IsString()
    nameRule!: string

  @IsString()
    description!: string

  @IsNotEmpty()
  @IsString()
    company!: string
}
