import dummyData from '../utils/dummyData';
import Order from '../models/order.model';

class OrderService {
  static async getAllOrder() {
    try {
      const orders = await dummyData.orders.map((order) => {
        const newOrder = new Order(order);
        newOrder.id = order.id;

        return newOrder;
      });

      return orders;
    } catch (e) {
      const error = 'An error just occurred while fetching all orders';
      throw error;
    }
  }

  static async modifyOrderById(modifiedOrder, id) {
    try {
      const orderToBeModified = await dummyData.orders.find(order => order.id === id);
      if (orderToBeModified != null) {
        dummyData.orders[id - 1] = modifiedOrder;
        dummyData.orders[id - 1].id = id;
      }

      return dummyData.orders[id - 1];
    } catch (e) {
      const error = 'An error just occurred while deleting the meal';
      throw error;
    }
  }

  static async makeNewOrder(order) {
    try {
      const orderLength = await dummyData.orders.length;
      const lastOrderId = await dummyData.orders[orderLength - 1].id;

      const newOrder = new Order(order);
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
