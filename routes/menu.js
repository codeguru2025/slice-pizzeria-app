const express = require("express");
const menuController = require("../controllers/menuController");

const router = express.Router();

// Fetch all menu items
router.get("/", menuController.getMenuItems);

module.exports = router;