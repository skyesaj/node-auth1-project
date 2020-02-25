const express = require("./node_modules/express");

apiRouter = require("./apiRouter");
configMiddleware = require("./middleware");
configMiddleware(server);
const server = express();

server.use("/api", apiRouter);
server.use(express.json());

server.get("/", (req, res) => {
  return res.send("Welcome to the API");
});

module.exports = server;
