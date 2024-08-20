const express = require("express");
const router = express.Router();
const { getContent } = require("../controller/Content.controller");

router.get("/:id", getContent);

module.exports = router;
