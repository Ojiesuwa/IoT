const database = require("../Database/database");

async function updateField(req, res) {
  console.log("demanding for update ", req.params);
  try {
    let { collection, document, fieldName, value } = req.params;
    let response = await database.updateField(
      collection,
      document,
      fieldName,
      value
    );
    res.status(200).send("Verified");
  } catch (error) {
    res.status(500).send("Error");
  }
}

async function getField(req, res) {
  console.log("demanding for fetch ", req.params);
  try {
    let { collection, document, fieldName, value } = req.params;
    let response = await database.getField(collection, document, fieldName);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Error");
  }
}

module.exports = { updateField, getField };
