const express = require("express");
const userRoute = require("./src/Routes/user-route");
const fieldRoute = require("./src/Routes/field-route");

require("dotenv").config();

const PORT = process.env.PORT || 3056;

const app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/field", fieldRoute);

app.listen(PORT, () => {
  console.log("Server has started on port ", PORT);
});
