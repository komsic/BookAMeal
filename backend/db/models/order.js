const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    orderStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    timestamps: true,
  });
  Order.associate = (models) => {
    Order.belongsTo(models.Menu, {
      foreignKey: 'menuId',
      as: 'Menus',
    });
    Order.belongsToMany(models.Meal, {
      through: models.OrderMeal,
      foreignKey: 'orderId',
      as: 'Meals',
    });
  };
  return Order;
};

export default order;
