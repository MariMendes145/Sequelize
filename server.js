//Server
const express = require("express");
const route = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const database = require("./db");
const User = require("./models/userModel");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

database.sync();
app.listen(3001, () => {
  console.log("Servidor rodando....");
});
