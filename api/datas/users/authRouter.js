const crypt = require("bcryptjs");

const router = require("express").Router();

const user = require("../users/userModel");

// router.use("/auth", authRouter);
// router.use("/user", userRouter);

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

router.post("/register", (req, res) => {
  let users = req.body;

  const hash = crypt.hashSync(req.body.password, 8);

  users.password = hash;

  user
    .add(users)
    .then(added => {
      res.status(201).json(added);
    })
    .catch(error => {
      res.status(500).json({ error: "not working" });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  user
    .findBy({ username })
    .first()
    .then(users => {
      if (users && crypt.compareSync(password, users.password)) {
        req.session.loggedIn = true;
        // console.log(req.session);
        res.status(200).json({ message: `Welcome ${users.username}` });
      } else {
        res.status(401).json({ error: "wrong login" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "no" });
    });
});

module.exports = router;
