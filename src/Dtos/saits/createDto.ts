import { Type } from 'class-transformer'
import { IsArray, IsInt, IsNotEmpty, IsString, Min, ValidateNested } from 'class-validator'

export class createSaitDto {
  @IsString()
  @IsNotEmpty()
    nameSait!: string

  @IsString()
  @IsNotEmpty()
    city!: string

  @IsString()
  @IsNotEmpty()
    address!: string

  @IsInt()
  @Min(1)
    numberEmployesForDay!: number

  @IsString()
  @IsNotEmpty()
    company!: string

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CountRolesDto)
    rols!: CountRolesDto[] // me permite por dentro de el array que venga lo que estoy pidiendo
}

export class CountRolesDto {
  @IsString()
  @IsNotEmpty()
    rolId!: string

  @IsInt()
  @Min(1)
    amount!: number
}
