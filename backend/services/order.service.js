import dummyData from '../utils/dummyData';
import Order from '../models/order.model';

const OrderService = {
  getAllOrder() {
    const orders = dummyData.orders.map((order) => {
      const newOrder = new Order(order);
      newOrder.id = order.id;

      return newOrder;
    });

    return orders;
  },
};

export default OrderService;
