const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
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
  }, {});
  Menu.associate = (models) => {
    Menu.hasMany(models.Meal, {
      foreignKey: 'menuId',
      as: 'Meals',
    });
    Menu.hasMany(models.Order, {
      foreignKey: 'menuId',
      as: 'Orders',
    });
  };
  return Menu;
};

export default menu;
