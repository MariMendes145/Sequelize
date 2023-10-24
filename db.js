const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("projetosequelize", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso");
} catch (error) {
  console.log(error);
}
module.exports = sequelize;
