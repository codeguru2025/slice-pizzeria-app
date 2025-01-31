const Order = require("../models/Order");

// Place an order
exports.placeOrder = async (req, res) => {
  const { items, deliveryAddress, isInTown } = req.body;

  try {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = isInTown ? 0 : 5;

    const order = new Order({
      items,
      total: total + deliveryFee,
      deliveryAddress,
      isInTown,
      deliveryFee,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Track an order
exports.trackOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Simulate payment processing
const processPayment = (total) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true); // Simulate successful payment
      }, 2000);
    });
  };
  
  // Place an order
  exports.placeOrder = async (req, res) => {
    const { items, deliveryAddress, isInTown } = req.body;
  
    try {
      const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const deliveryFee = isInTown ? 0 : 5;
      const totalAmount = total + deliveryFee;
  
      // Simulate payment
      const paymentSuccess = await processPayment(totalAmount);
      if (!paymentSuccess) {
        return res.status(400).json({ message: "Payment failed" });
      }
  
      const order = new Order({
        items,
        total: totalAmount,
        deliveryAddress,
        isInTown,
        deliveryFee,
      });
  
      const savedOrder = await order.save();
      res.status(201).json(savedOrder);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };