require("dotenv").config();
const app = require("./app");
const connectMongo = require("./config/mongo");
const connectMySQL = require("./config/mysql");

connectMongo();
connectMySQL();

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
