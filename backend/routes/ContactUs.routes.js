const express = require("express");
const router = express.Router();
const {
  getContactUs,
  createContactUs,
} = require("../controller/ContactUs.controller");

router.get("/:id", getContactUs);
router.post("/", createContactUs);

module.exports = router;
