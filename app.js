const { ENGINE_METHOD_ALL } = require("constants")
const express = require("express")
const app = express()

app.set("views", "views")
app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("home-guest")
})

app.listen(3000)
