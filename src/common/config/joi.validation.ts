import * as Joi from 'joi';

export const joiValidation = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  skipPerPage: Joi.number().default(5),
  limitPerPage: Joi.number().default(5),
});
