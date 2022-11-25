const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/order.controller");

router.post("/:_id", OrderController.createOrder); 

router.get("/:_id", OrderController.getOrdersFromUser);

module.exports = router;