const express = require("express");
const router = express.Router();
const content = require("./content");
const user = require("./user");

// const auth = require("./auth");
// const playlist = require("./playlist");
// const artists = require("./artists");
// const albums = require("./albums");
// const tracks = require("./tracks");
// const { checkAuth } = require("../middlewares/auth");

// router.use("/", auth);
// router.use("/playlists", checkAuth, playlist);
// router.use("/artists", checkAuth, artists);
// router.use("/albums", checkAuth, albums);
// router.use("/tracks", checkAuth, tracks);

router.use("/content", content);
router.use("/single", content);
router.use("/user", user);

module.exports = router;
