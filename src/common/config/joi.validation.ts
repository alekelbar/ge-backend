import * as Joi from 'joi'

export const joiValidation = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB: Joi.string().required()
})