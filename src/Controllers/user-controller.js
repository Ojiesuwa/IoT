let database = require("../Database/database");

async function register(req, res) {
  try {
    console.log(req.body);
    let response = await database.register(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("An error occured");
  }
}

async function login(req, res) {
  try {
    let response = await database.login(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { register, login };
