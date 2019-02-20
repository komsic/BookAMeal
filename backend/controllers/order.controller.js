import OrderService from '../services/order.service';

const OrderController = {
  getAllOrder(req, res) {
    const allOrders = OrderService.getAllOrder();

    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },
  modifyOrderById(req, res) {
    const modifiedOrder = OrderService.modifyOrderById(req.body);

    return res.json({
      status: 'success',
      data: modifiedOrder,
    }).status(200);
  },
  makeNewOrder(req, res) {
    const newOrder = OrderService.makeNewOrder(req.body);

    return res.json({
      status: 'success',
      data: newOrder,
    }).status(201);
  },
};

export default OrderController;
