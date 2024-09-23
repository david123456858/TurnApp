import { NextFunction, Request, Response } from 'express'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
// funcion que valida el cuerpo de la peticion
export const validateDtos = (classDto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Esto nos permite convertir con la dependencia tranformer un objeto json por ejemplo en una clase
    const classInstanceBody = plainToInstance(classDto, req.body)

    const errorValidateClass = await validate(classInstanceBody)

    if (errorValidateClass.length > 0) {
      res.status(400).json({ error: 'bad request' })
      return
    }
    console.log(classDto.nit)
    req.body = classInstanceBody
    next()
  }
}
