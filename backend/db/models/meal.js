const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inMenu: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    timestamps: true,
  });
  Meal.associate = (models) => {
    Meal.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    });
    Meal.belongsToMany(models.Order, {
      through: models.OrderMeal,
      foreignKey: 'mealId',
      as: 'Orders',
    });
  };
  return Meal;
};

export default meal;
