const express = require("express");
const collectionController = require("../Controllers/");

const router = express.Router();
router.use(express.json());

module.exports = router;
