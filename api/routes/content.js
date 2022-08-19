const express = require("express");
const router = express.Router();
const ContentController = require("../controllers/content");

router.get("/", ContentController.getContentTrends);
router.get("/:type/:id", ContentController.getSingleContent);

module.exports = router;
