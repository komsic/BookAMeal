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
  modifyOrderById(modifiedOrder) {
    const orderToBeModified = dummyData.orders.find(order => order.id === modifiedOrder.id);
    if (orderToBeModified != null) {
      dummyData.orders[orderToBeModified - 1] = modifiedOrder;
    }

    return modifiedOrder;
  },
};

export default OrderService;
