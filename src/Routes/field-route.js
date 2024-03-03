const express = require("express");
const fieldController = require("../Controllers/field-controller");

const router = express.Router();
router.use(express.json());

router.post(
  "/update/:collection/:document/:fieldName/:value",
  fieldController.updateField
);
router.get("/fetch/:collection/:document/:fieldName", fieldController.getField);

module.exports = router;
