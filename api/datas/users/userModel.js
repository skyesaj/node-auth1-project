const db = require("../dbConfig");

function add(data) {
  return db("user")
    .insert(data, "id")
    .then(log => {
      const [id] = log;
      return findById(id);
    });
}

function findBy(filter) {
  return db("user")
    .select("id", "username", "password")
    .where(filter);
}

function find() {
  return db("user").select("id", "username");
}

function findById(id) {
  return db("user")
    .select("id", "username")
    .where({ id })
    .first();
}

module.exports = {
  findById,
  find,
  findBy,
  add
};
