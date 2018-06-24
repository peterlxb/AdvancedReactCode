const express = require("express");
const router = express.Router();

//Get authentication middle
const Authentication = require("./controllers/authentication");

//@route GET api/users/test
//@desc Tests user here
//@access Public
router.get("/test", (req, res) => {
  return res.json({ msg: "Users Works" });
});

//@route GET users/signup
//@desc Signup new user goes here
//@access Public
router.get("/signup", Authentication.signup, (req, res) => {
  return res.json({ msg: "Users Works" });
});

module.exports = router;
