const User = require("../models/User")

exports.login = function (req, res) {}

exports.logout = function (req, res) {}

exports.register = function (req, res) {
  user = new User(req.body)
  user.register()
  res.send("Thanks for trying to register")
}

exports.home = function (req, res) {
  res.render("home-guest")
}
