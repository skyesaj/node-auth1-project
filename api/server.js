const express = require("express");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const knex = require("../api/datas/dbConfig");

const apiRouter = require("./apiRouter");
const server = express();
const sessionConfig = {
  name: "login_cookie",
  secret: "SECRET",
  saveUninitialized: true,
  resave: false,
  store: new KnexSessionStore({
    knex,
    createTable: true,
    clearInterval: 1000 * 60 * 60,
    tablename: "sessions",
    sidfieldname: "sid"
  }),
  cookie: {
    maxAge: 1000 * 60 * 40,
    secure: false,
    httpOnly: true
  }
};

const configMiddleware = require("./middleware");
configMiddleware(server);

server.use(express.json());
server.use(session(sessionConfig));
server.use("/api", apiRouter);
server.get("/", (req, res) => {
  return res.send("Welcome to the API");
});

module.exports = server;
