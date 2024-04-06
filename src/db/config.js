const { Sequelize } = require("sequelize");

const mode = process.env.NODE_MODE;
let sequelize;

if (mode == "prod") {
  sequelize = new Sequelize(
    process.env.database,
    process.env.database_username,
    process.env.database_password,
    {
      host: process.env.database_host,
      dialect: "mysql",
    }
  );
} else {
  sequelize = new Sequelize(
    process.env.database,
    process.env.database_username,
    process.env.database_password,
    {
      host: process.env.database_host,
      dialect: "mysql",
    }
  );
}

module.exports = sequelize;
