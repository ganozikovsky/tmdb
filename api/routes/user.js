const express = require("express");
const { generateToken } = require("../config/tokens");
const { User, Movie } = require("../models");
const router = express.Router();
const axios = require("axios");

const validateAuth = require("../middlewares/auth");

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=892afd68c77e0b0640953b7d3f1d71b0";

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  User.findOne({
    where: { username },
    include: { model: Movie, as: "favorites" },
  }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        username: user.username,
        email: user.email,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(user);
    });
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.put("/favorites", (req, res) => {
  const { userId, movieId } = req.query;

  Movie.findOrCreate({
    where: { id: movieId },
  }).then(([movie, ...data]) => {
    User.findByPk(userId)
      .then((user) => {
        user.addFavorite(movie);
        return movie;
      })
      .then((movie) => res.send(movie))
      .catch((err) => err);
  });
});

module.exports = router;
