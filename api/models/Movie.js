const { STRING } = require("sequelize");
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      allowNull: null,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "movies",
  }
);

module.exports = Movie;
