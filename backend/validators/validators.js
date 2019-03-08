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
      menuId: this.getPositiveNonZeroNumberSchema().label('Meal menu id'),
    }).min(2)
      .label('meal');
  }

  getMealArraySchema(label) {
    return this.Joi.array().items(this.getMealSchema()).min(1).label(label);
  }

  getMenuSchema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      id: this.getPositiveNonZeroNumberSchema(),
      name: this.getStringSchema('Menu name'),
      meals: this.getMealArraySchema('Menu meals').optional(),
    }).or('id', 'name');
  }

  getOrderSchema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      id: this.getPositiveNonZeroNumberSchema().allow(null).default(null).label('Order id'),
      customerName: this.getStringSchema('Customer name')
        .when('id', { is: null, then: Joi.required() }),
      catererName: this.getStringSchema('Caterer name')
        .when('id', { is: null, then: Joi.required() }),
      orderStatus: this.getStringSchema('Order Status').uppercase()
        .valid('CANCELLED', 'BEING PROCESSED', 'DISPATCHED', 'DELIVERED')
        .when('id', { is: null, then: Joi.required() }),
      meals: this.getMealArraySchema('Ordered meals')
        .when('id', { is: null, then: Joi.required() }),
    }).label('order');
  }
}

export default Validator;
