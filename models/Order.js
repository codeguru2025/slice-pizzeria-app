const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
  total: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  isInTown: { type: Boolean, default: true },
  deliveryFee: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["Pending", "Preparing", "Out for Delivery", "Delivered"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);