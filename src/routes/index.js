const router = require("express").Router();
const auth = require("../middlewares/auth");
const userController = require("../controllers/userController");

router.post("/mongo-user", auth, userController.createMongoUser);
router.post("/mysql-user", auth, userController.createSQLUser);

module.exports = router;
