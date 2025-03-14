const express = require("express");
const { getContact } = require("../controllers/contactController");
const router = express.Router();
router.get("/", getContact);
module.exports = router;
