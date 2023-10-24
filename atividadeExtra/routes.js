const express = require("express");
const userController = require("./controller/userController");

const routes = express.Router();
routes.post("./cadastrar", userController.createUser);
routes.get("./listar", userController.getUser);

module.exports = routes;
