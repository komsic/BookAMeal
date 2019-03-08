import dummyData from '../utils/dummyData';
import OrderModel from '../models/order.model';
import db from '../db/models';

const { Order } = db;

class OrderService {
  static async getAllOrder() {
    try {
      return await Order.findAll();
    } catch (e) {
      const error = 'An error just occurred while fetching all orders';
      throw error;
    }
  }

  static async modifyOrderById(modifiedOrder, id) {
    try {
      const updatedOrder = await Order.update(modifiedOrder,
        { returning: true, where: { id } });

      return updatedOrder[1][0];
    } catch (e) {
      const error = 'An error just occurred while deleting the meal';
      throw error;
    }
  }

  static async makeNewOrder(order) {
    try {
      const orderLength = await dummyData.orders.length;
      const lastOrderId = await dummyData.orders[orderLength - 1].id;

      const newOrder = new OrderModel(order);
      newOrder.id = lastOrderId + 1;
      await dummyData.orders.push(newOrder);

      return newOrder;
    } catch (e) {
      const error = 'An error just occurred while deleting the meal';
      throw error;
    }
  }
}

export default OrderService;
