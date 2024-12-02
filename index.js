const express = require("express");
const app = express();
const PORT = 3000;

const database = require("./config/database");

app.listen(PORT, () => {
  console.log(`server is running out:` + PORT);
});
