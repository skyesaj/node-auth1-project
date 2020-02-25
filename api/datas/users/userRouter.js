const router = require("express").Router();

const user = require("./userModel");

router.get("/", (req, res) => {
  user
    .find()
    .then(users => {
      res.send("hey user");
    })
    .catch(error => {
      res.send(error);
    });
});
