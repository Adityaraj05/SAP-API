const express = require("express");
const router = express.Router();

const {users,usersTesting} = require("../controllers/users")
//GET users listing.
router.route("/").get(users);
// just for testing purposes
router.route("/testing").get(usersTesting);
module.exports = router;