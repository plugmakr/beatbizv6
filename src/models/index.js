const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const User = require('./user')(sequelize);
const Project = require('./project')(sequelize);
const Client = require('./client')(sequelize);

// Define associations
User.hasMany(Project);
Project.belongsTo(User);

User.hasMany(Client);
Client.belongsTo(User);

Client.hasMany(Project);
Project.belongsTo(Client);

module.exports = {
  sequelize,
  User,
  Project,
  Client,
};