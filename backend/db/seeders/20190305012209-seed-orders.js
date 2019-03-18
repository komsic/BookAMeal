/* eslint-disable no-unused-vars */
const now = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Orders', [
    {
      totalAmount: 5600,
      orderStatus: 'DISPATCHED',
      userId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      totalAmount: 4200,
      orderStatus: 'DISPATCHED',
      userId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      totalAmount: 14500,
      orderStatus: 'DISPATCHED',
      userId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      totalAmount: 14400,
      orderStatus: 'DELIVERED',
      userId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      totalAmount: 15150,
      orderStatus: 'BEING PROCESSED',
      userId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      totalAmount: 7000,
      orderStatus: 'CANCELED',
      userId: 2,
      createdAt: now,
      updatedAt: now,
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Orders', null, {}),
};
