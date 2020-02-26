const crypt = require("bcryptjs");
const user = require("./datas/users/userModel");

function restricted(req, res, next) {
  // const {username, password} = req.headers;
  // if(username && password) {
  //     user.findBy({username})
  //         .then(users => {
  //             if(users && crypt.compareSync(password, users.password)) {
  //                 next();
  //             } else {
  //                 res.status(500).json({error: "wrong login"})
  //             }
  //         })
  //         .catch(err => {
  //             res.status(404).json({error: "User not found"})
  //         })
  // } else {
  //     res.status(400).json({error: "wrong"})
  // }
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(400).json({ error: "wrong login" });
  }
}

module.exports = restricted;
