const User = require("../models/User")

exports.viewCreateScreen = function (req, res) {
  res.render("create-post")
}
