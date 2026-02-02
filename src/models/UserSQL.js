const db = require("../config/mysql");

exports.createUser = (user, cb) => {
  db.query("INSERT INTO users SET ?", user, cb);
};
