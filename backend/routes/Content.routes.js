const express = require("express");
const router = express.Router();
const { getContent, getContents } = require("../controller/Content.controller");

router.get("/:id", getContent);
router.get("/", getContents);

module.exports = router;
