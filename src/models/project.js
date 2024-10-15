const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('Planning', 'In Progress', 'Review', 'Completed'),
      defaultValue: 'Planning',
    },
    deadline: DataTypes.DATE,
  });
};