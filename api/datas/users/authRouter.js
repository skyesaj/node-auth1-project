const crypt = require("bcryptjs");

const router = require("express").Router();

const user = require("../users/userModel");

router.use("/auth", authRouter);
router.use("/user", userRouter);

// router.get('/hash', (req,res) => {
//     const
// });

router.get("/protected", (req, res, next) => {
  if (req.headers.authorization) {
    crypt.hash(req.headers.authorization, 8, (error, hash) => {
      if (error) {
        res.status(500).json({ error: "no" });
      } else {
        res.status(200).json({ hash });
      }
    });
  } else {
    res.status(400).json({ error: "missing" });
  }
});

module.exports = router;
