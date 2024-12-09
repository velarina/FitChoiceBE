const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  dbname: process.env.DBNAME,
  dbuser: process.env.DBUSER,
  dbpass: process.env.DBPASS,
  dbhost: process.env.DBHOST,
  dbdialect: process.env.DBDIALECT,
  port: process.env.PORT,
};
