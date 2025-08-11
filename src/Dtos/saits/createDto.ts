import { Type } from 'class-transformer'
import { IsArray, IsEmpty, IsInt, IsString, Min, ValidateNested } from 'class-validator'

export class createSaitDto {
  @IsString()
  @IsEmpty()
    nameSait!: string

  @IsString()
  @IsEmpty()
    city!: string

  @IsString()
  @IsEmpty()
    address!: string

  @IsInt()
  @Min(1)
    numberEmployesForDay!: number

  @IsString()
  @IsEmpty()
    company!: string

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CountRolesDto)
    rols!: CountRolesDto[] // me permite por dentro de el array que venga lo que estoy pidiendo
}

export class CountRolesDto {
  @IsString()
    rolId!: string

  @IsInt()
  @Min(1)
    amount!: number
}
