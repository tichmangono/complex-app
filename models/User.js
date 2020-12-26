const usersCollection = require("../db").collection("users")
const validator = require("validator")

//construcor function, can be leverage
let User = function (data) {
  this.data = data
  this.errors = []
}

User.prototype.cleanUp = function () {
  if (typeof this.data.username != "string") {
    this.data.username = ""
  }
  if (typeof this.data.email != "string") {
    this.data.email = ""
  }
  if (typeof this.data.password != "string") {
    this.data.password = ""
  }

  // get rid of any bogus props
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password.trim(),
  }
}

User.prototype.validate = function () {
  if (this.data.username == "") {
    this.errors.push("You must provide a username")
  }
  if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {
    this.errors.push("Username can onlycontain letters and numbers")
  }
  if (!validator.isEmail(this.data.email)) {
    this.errors.push("You must provide a valid email address")
  }
  if (this.data.password == "") {
    this.errors.push("You must provide a password")
  }
  if (this.data.password.length > 0 && this.data.password.length < 12) {
    this.errors.push("Password must be at least 12 characters")
  }
  if (this.data.password.length > 100) {
    this.errors.push("Password cannot exceed 100 characters")
  }
  if (this.data.username.length > 0 && this.data.username.length < 3) {
    this.errors.push("Username must be at least 3 characters")
  }
  if (this.data.username.length > 30) {
    this.errors.push("Username cannot exceed 30 characters")
  }
}

User.prototype.register = function () {
  //Step #1: Validate user data
  this.cleanUp()
  this.validate()
  //Step #2: only if there are no validation errors
  // then save user data into a database
  if (!this.errors.length) {
    usersCollection.insertOne(this.data)
  }
}

module.exports = User
