import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class registerRuleDto {
  @IsNotEmpty()
  @IsString()
    idRule!: string

  @IsNotEmpty()
  @IsString()
    nameRule!: string

  @IsNotEmpty()
  @IsNumber()
    numberTotal!: string

  @IsString()
    description!: string

  @IsNotEmpty()
  @IsString()
    company!: string
}
