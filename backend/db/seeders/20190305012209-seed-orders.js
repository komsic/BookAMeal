const now = new Date();

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Orders', [
    {
      customerName: 'Harry Potter',
      orderStatus: 'DISPATCHED',
      menuId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      customerName: 'Harry Potter',
      orderStatus: 'DISPATCHED',
      menuId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      customerName: 'Katnis Everdeen',
      orderStatus: 'DISPATCHED',
      menuId: 2,
      createdAt: now,
      updatedAt: now,
    },
    {
      customerName: 'Ron Weasley',
      orderStatus: 'DELIVERED',
      menuId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      customerName: 'Haymitch Abernacle',
      orderStatus: 'BEING PROCESSED',
      menuId: 1,
      createdAt: now,
      updatedAt: now,
    },
    {
      customerName: 'Lord Voldermont',
      orderStatus: 'CANCELED',
      menuId: 2,
      createdAt: now,
      updatedAt: now,
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Orders', null, {}),
};
