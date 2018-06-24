const express = require("express");
const router = express.Router();

//@route GET api/users/test
//@desc Tests user here
//@access Public
router.get("/test", (req, res) => {
  return res.json({ msg: "Users Works" });
});

module.exports = router;
