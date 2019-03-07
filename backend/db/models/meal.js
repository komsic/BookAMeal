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
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  Meal.associate = (models) => {
    Meal.belongsTo(models.Menu, {
      foreignKey: 'menuId',
      as: 'Menu',
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
