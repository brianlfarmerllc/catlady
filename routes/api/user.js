const router = require("express").Router();
const UserController = require("../../controller/userController");
const db = require("../../models");
const passport = require("../../config/passport");

// Matches with "/api/user/"
router
  .route("/")
  .get((req, res) => UserController.findAll(req, res, db.User))
  .post((req, res) => UserController.create(req, res, db.User));

router.route("/login").post(passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    username: req.user.username,
    _id: req.user.id,
  });
});

// route for retrieving info of current signed in user and for isAuth component
router.route("/currentuser").get((req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json("Sorry Not logged In");
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user._id,
    });
  }
});

module.exports = router;
