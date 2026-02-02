const MongoUser = require("../models/UserMongo");
const SQLUser = require("../models/UserSQL");

exports.createMongoUser = async (req, res) => {
  const user = await MongoUser.create(req.body);
  res.json(user);
};

exports.createSQLUser = (req, res) => {
  SQLUser.createUser(req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.send("MySQL User Created");
  });
};
