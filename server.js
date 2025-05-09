//express web server

const express = require("express");
const app = express();
const port = 3000;

const router = express.Router();

router.use((req, res, next) => {
  console.log("Time:", Date.now());
    next();
}
);


router.get("/", (req, res) => {
  res.send("Hello, Jacob Humphreys");
});

app.use("/", router);

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

app.listen(process.env.port || port, () => {
  console.log("Server is listening on port " + (process.env.PORT || port));
});
