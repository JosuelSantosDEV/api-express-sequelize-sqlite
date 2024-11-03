const express = require("express");

const routes  = require("./routes/index.js");

const app = express();

routes(app);

app.get("/", (req, res) => res.send("<h1>API express-sequelize-sqlite is running!!!</h1>"));

module.exports = app;