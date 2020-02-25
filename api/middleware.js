const express = require("./node_modules/express");
const helmet = require("./node_modules/helmet");
const cors = require("./node_modules/cors");

module.exports = server => {
  server.use(helmet());
  server.use(cors());
  server.use(express.json());
};
