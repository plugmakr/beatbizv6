const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: DataTypes.STRING,
    location: DataTypes.STRING,
  });
};