const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // defaultScope: {
    //   attributes: { exclude: ['password'] },
    // },
  });
  User.associate = (models) => {
    User.hasMany(models.Meal, {
      foreignKey: 'userId',
      as: 'Meals',
    });
    User.hasMany(models.Order, {
      foreignKey: 'userId',
      as: 'Orders',
    });
  };
  return User;
};

export default user;
