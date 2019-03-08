const now = new Date();

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Meals', [
    {
      name: 'Akara',
      price: 1500,
      quantity: 125,
      menuId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Amala',
      price: 2500,
      quantity: 45,
      menuId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Pounded Yam',
      price: 3500,
      quantity: 15,
      menuId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Yam With Fried Eggs',
      price: 2400,
      quantity: 10,
      menuId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Beans',
      price: 1500,
      quantity: 79,
      menuId: 1,
      createdAt: now,
      updatedAt: now,
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Meals', null, {}),
};
