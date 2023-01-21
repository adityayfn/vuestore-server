const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')

const app = express()
const path = require("path")
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.set("strictQuery", true)

app.use("/img", express.static(path.join(__dirname, "./public/img")))
const db = require("./app/models")
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Database connected!")
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err)
    process.exit()
  })

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  })
})

require("./app/routes/product.route")(app)
require("./app/routes/order.route")(app)

app.listen(PORT, () => {
  console.log("server is running")
})
