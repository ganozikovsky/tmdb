const User = require("./User");
const Movie = require("./Movie");

User.belongsToMany(Movie, { as: "favorites", through: "favorites_movies" });
Movie.belongsToMany(User, { as: "favorites", through: "favorites_movies" });

module.exports = { User, Movie };
