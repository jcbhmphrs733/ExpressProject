const routes = require("express").Router();
const controller = require("../controllers/index.js");

routes.get("/jacob", controller.jacobRoute);
routes.get("/marissa", controller.marissaRoute);
routes.get("/", controller.homeRoute);

module.exports = routes;