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
      userId: this.getPositiveNonZeroNumberSchema().label('Meal user id'),
      inMenu: this.Joi.boolean().label('inMenu'),
    }).min(2)
      .label('meal');
  }

  getMealArraySchema(label) {
    return this.Joi.array().items(this.getMealSchema()).min(1).label(label);
  }

  // getMenuSchema() {
  //   return this.Joi.object().options({ abortEarly: false }).keys({
  //     id: this.getPositiveNonZeroNumberSchema(),
  //     name: this.getStringSchema('Menu name'),
  //     meals: this.getMealArraySchema('Menu meals').optional(),
  //   }).or('id', 'name');
  // }

  getMenuSchema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      userId: this.getPositiveNonZeroNumberSchema().required(),
      meals: this.Joi.array().items(this.getPositiveNonZeroNumberSchema()).min(1).required(),
    });
  }

  getOrderMealShema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      quantity: this.getPositiveNonZeroNumberSchema().label('order quantity'),
      mealId: this.getPositiveNonZeroNumberSchema().label('order meal id'),
    });
  }

  getOrderMealArrayShema(label) {
    return this.Joi.array().items(this.getOrderMealShema()).min(1).label(label);
  }

  getOrderSchema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      id: this.getPositiveNonZeroNumberSchema().allow(null).default(null).label('Order id'),
      totalAmount: this.getPositiveNonZeroNumberSchema().label('total order amount')
        .when('id', { is: null, then: Joi.required() }),
      orderStatus: this.getStringSchema('Order Status').uppercase()
        .valid('CANCELLED', 'BEING PROCESSED', 'DISPATCHED', 'DELIVERED')
        .when('id', { is: null, then: Joi.required() }),
      orderedMeals: this.getOrderMealArrayShema('Ordered meals')
        .when('id', { is: null, then: Joi.required() }),
      userId: this.getPositiveNonZeroNumberSchema().label('Order caterer id')
        .when('id', { is: null, then: Joi.required() }),
    }).label('order');
  }

  getUserSchema() {
    return this.Joi.object().options({ abortEarly: false }).keys({
      name: this.getStringSchema('user name'),
      description: this.getStringSchema('user description'),
      isAdmin: this.Joi.boolean().label('isAdmin'),
      email: this.Joi.string().email().required().label('user email'),
      password: this.Joi.string().required().label('user password'),
    });
  }
}

export default Validator;
