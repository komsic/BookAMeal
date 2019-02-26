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
      dummyData.orders[modifiedOrder.id - 1] = modifiedOrder;
    }

    return dummyData.orders[modifiedOrder.id - 1];
  },
  makeNewOrder(order) {
    const orderLength = dummyData.orders.length;
    const lastOrderId = dummyData.orders[orderLength - 1].id;

    const newOrder = new Order(order);
    newOrder.id = lastOrderId + 1;
    dummyData.orders.push(newOrder);

    return newOrder;
  },
};

export default OrderService;
