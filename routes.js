const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Primeira Rota");
});

module.exports = routes;
