export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    orderStatus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    customerName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    menuId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Menus',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Orders'),
};
