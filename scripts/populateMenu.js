const mongoose = require("mongoose");
const MenuItem = require("../models/MenuItem");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Sample menu data
const menuItems = [
  // Pizzas
  { name: "Margherita Pizza", price: 10, category: "pizza", image: "https://via.placeholder.com/200x150?text=Margherita+Pizza" },
  { name: "Pepperoni Pizza", price: 12, category: "pizza", image: "https://via.placeholder.com/200x150?text=Pepperoni+Pizza" },
  { name: "Veggie Pizza", price: 11, category: "pizza", image: "https://via.placeholder.com/200x150?text=Veggie+Pizza" },
  // Add more items as needed
];

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    // Insert menu items
    MenuItem.insertMany(menuItems)
      .then(() => {
        console.log("Menu items inserted successfully");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("Error inserting menu items:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => console.error("MongoDB connection error:", err));