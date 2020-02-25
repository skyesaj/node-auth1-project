const router = require("express").Router();
const crypt = require("bcryptjs");

const userRouter = require("./datas/users/userRouter");
const authRouter = require("./datas/users/authRouter");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.get("/", (req, res) => {
  res.json({ message: "running" });
});

module.exports = router;
