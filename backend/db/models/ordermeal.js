const orderMeal = (sequelize, DataTypes) => {
  const OrderMeal = sequelize.define('OrderMeal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  OrderMeal.associate = (models) => {
    // associations can be defined here
  };
  return OrderMeal;
};

export default orderMeal;
