var express = require("express");
var router = express.Router();
const controller = require("../controllers/main");

/* GET home page. */
console.log("Inside app_server, routes, index.js.");
router.get("/", controller.index);

module.exports = router;
