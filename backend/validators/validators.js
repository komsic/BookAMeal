import Joi from 'joi';

class Validator {
  constructor() {
    this.Joi = Joi;
  }

  getPositiveNonZeroNumberSchema() {
    return this.Joi.number().integer().greater(0);
  }
}

export default Validator;
