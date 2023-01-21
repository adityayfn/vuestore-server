module.exports = (app) => {
  const order = require("../controllers/order.controller")
  const router = require("express").Router()

  router.get("/user/:id", order.findOrder)
  router.post("/update/user/:id", order.addToCart)
  router.delete("/delete/user/:id/product/:product", order.removeFromCart)

  app.use("/api/orders", router)
}
