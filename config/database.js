const sql = require("sequelize");
const config = require("./config");
const database = new sql(config.dbname, config.dbuser, config.dbpass, {
  host: config.dbhost,
  dialect: config.dbdialect,
});

database
  .authenticate()
  .then(() => {
    console.log("connected to database sucesfully");
  })
  .catch((error) => {
    console.error("unable to connect to database" + error);
  });

module.exports = database;
