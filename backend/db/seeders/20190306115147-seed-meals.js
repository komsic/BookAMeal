/* eslint-disable no-unused-vars */
const now = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Meals', [
    {
      name: 'Tuwo',
      price: 800,
      quantity: 15,
      userId: 1,
      inMenu: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Amala',
      price: 1000,
      quantity: 25,
      userId: 1,
      inMenu: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Pounded Yam',
      price: 1500,
      quantity: 12,
      userId: 1,
      inMenu: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Eba',
      price: 750,
      quantity: 10,
      userId: 2,
      inMenu: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Jollof Rice',
      price: 1200,
      quantity: 18,
      userId: 2,
      inMenu: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Beans',
      price: 500,
      quantity: 14,
      userId: 2,
      inMenu: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Sphag',
      quantity: 22,
      price: 900,
      userId: 2,
      inMenu: true,
      createdAt: now,
      updatedAt: now,
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Meals', null, {}),
};
