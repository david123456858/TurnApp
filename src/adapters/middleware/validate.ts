import { NextFunction, Request, Response } from 'express'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
/**
 * Middleware to validate request body against a DTO class.
 * If validation fails, it responds with a 422 status and error details.
 * If validation passes, it converts the request body to an instance of the DTO class and calls next middleware.
 */

export const validateDtos = (classDto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Esto nos permite convertir con la dependencia tranformer un objeto json por ejemplo en una clase
    const classInstanceBody = plainToInstance(classDto, req.body)

    const errorValidateClass = await validate(classInstanceBody)
    console.log('errorValidateClass', errorValidateClass)

    if (errorValidateClass.length > 0) {
      res.status(422).json({
        error: 'Inprocessible entity',
        info: errorValidateClass[0].constraints
      })
      return
    }
    req.body = classInstanceBody
    next()
  }
}
