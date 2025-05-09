const jacobRoute = (req, res) => {
  res.send("Hello, Jacob Humphreys");
};

const marissaRoute = (req, res) => {
  res.send("Hello, Marissa Humphreys");
};

const homeRoute = (req, res) => {
  res.send("Welcome home!");
};

module.exports = {
  jacobRoute,
  marissaRoute,
  homeRoute,
};
