import Joi from 'joi';

class Validator {
  constructor() {
    this.Joi = Joi;
  }

  getPositiveNonZeroNumberSchema() {
    return this.Joi.number().integer().greater(0);
  }

  getStringSchema() {
    return this.Joi.string().trim().min(1);
  }

  getMealSchema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      id: this.Joi.number().greater(0).allow(null).default(null),
      name: this.getStringSchema().label('Meal name')
        .when('id', { is: null, then: Joi.required() }),
      quantity: this.getPositiveNonZeroNumberSchema(),
      price: this.getPositiveNonZeroNumberSchema(),
    }).min(2)
      .label('meal');
  }

  getMealArraySchema() {
    return this.Joi.array().items(this.getMealSchema());
  }

  getMenuSchema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      id: this.getPositiveNonZeroNumberSchema(),
      name: this.getStringSchema().label('Menu name'),
      meals: this.getMealArraySchema().min(1).optional().label('Menu meals'),
    }).or('id', 'name');
  }
}

export default Validator;
