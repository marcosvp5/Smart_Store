const OrderService = require("../service/order.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class OrderController {
    static async createOrder(req, res, next) {
        try {
            const { _id } = req.params;
            const newOrder = await OrderService.createOrder(_id, req.body);
            res.status(201).send(newOrder); 
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async getOrdersFromUser(req, res, next) {
        try {
            const { _id } = req.params;
            const orders = await OrderService.getOrdersFromUser(_id);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

module.exports = OrderController;