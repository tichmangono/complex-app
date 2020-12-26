const mongodb = require("mongodb")

connectionString = "mongodb+srv://tich:ComplexApp123@cluster0.6swye.mongodb.net/complexapp-db?retryWrites=true&w=majority"
mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  module.exports = client.db()
  const app = require("./app")
  app.listen(3000)
})
