/* eslint-disable no-unused-vars */
const now = new Date();

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('OrderMeals', [
    {
      quantity: 2,
      mealId: 1,
      orderId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 4,
      mealId: 1,
      orderId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 5,
      mealId: 1,
      orderId: 3,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 4,
      mealId: 2,
      orderId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 1,
      mealId: 2,
      orderId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 7,
      mealId: 3,
      orderId: 3,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 2,
      mealId: 4,
      orderId: 4,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 1,
      mealId: 4,
      orderId: 5,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 4,
      mealId: 4,
      orderId: 6,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 5,
      mealId: 5,
      orderId: 4,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 3,
      mealId: 5,
      orderId: 5,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 5,
      mealId: 7,
      orderId: 4,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 12,
      mealId: 7,
      orderId: 5,
      createdAt: now,
      updatedAt: now,
    },
    {
      quantity: 5,
      mealId: 7,
      orderId: 6,
      createdAt: now,
      updatedAt: now,
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('OrderMeals', null, {}),
};
