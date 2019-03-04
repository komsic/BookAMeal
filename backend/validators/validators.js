import Joi from 'joi';

class Validator {
  constructor() {
    this.Joi = Joi;
  }

  getPositiveNonZeroNumberSchema() {
    return this.Joi.number().integer().greater(0);
  }

  getStringSchema(label) {
    return this.Joi.string().trim().min(1).label(label);
  }

  getMealSchema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      id: this.Joi.number().greater(0).allow(null).default(null),
      name: this.getStringSchema('Meal name')
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
      name: this.getStringSchema('Menu name'),
      meals: this.getMealArraySchema('Menu meals').min(1).optional(),
    }).or('id', 'name');
  }
}

export default Validator;
