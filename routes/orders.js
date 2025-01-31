const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

// Place an order
router.post("/", orderController.placeOrder);

// Track an order
router.get("/:id", orderController.trackOrder);

module.exports = router;