const now = new Date();
export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Menus', [
    {
      name: 'Greasy Sae Kitchen',
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Honeydukes',
      createdAt: now,
      updatedAt: now,
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Menus', null, {}),
};
