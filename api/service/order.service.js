const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Products");

class OrderService {
    static async createOrder(userId, reqbody) { 
        try {
            const user = await User.findById(
                userId,
            );

            let order = new Order(reqbody);
            await order.save({});
        
            order = await Order.findByIdAndUpdate(

            )

            return await User.findByIdAndUpdate(
                userId,
            );
        } catch (error) {
            console.error("error existente en createOrder- SERVICE", error.message);
        }
    }

    static async getOrdersFromUser(userId) {
        try {
            const orders = await Order.find(
                { userId },
            );
            return orders;
        } catch (error) {
            console.error("error existente en getOrdersFromUser- SERVICE", error.message);
        }
    }
}

module.exports = OrderService;