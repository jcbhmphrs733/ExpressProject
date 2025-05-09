//express web server

const express = require("express");
const app = express();
const controller = require("./controllers/controllers.js");

app.get("/jacob", controller.jacobRoute);
app.get("/marissa", controller.marissaRoute);
app.get("/", controller.homeRoute);

const port = 3000;

app.listen(process.env.port || port, () => {
  console.log("Server is listening on port " + (process.env.PORT || port));
});
