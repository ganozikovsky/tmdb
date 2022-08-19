const Sequelize = require("sequelize");

const sequelize = new Sequelize("tmdb", "gonzalo", null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
