import OrderService from '../services/order.service';

const OrderController = {
  getAllOrder(req, res) {
    const allOrders = OrderService.getAllOrder();

    if (allOrders.length === 0) {
      return res.json({
        status: 'successful but there is no order in this list',
        data: allOrders,
      }).status(200);
    }

    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },
  modifyOrderById(req, res) {
    const modifiedOrder = OrderService.modifyOrderById(req.body);

    if (modifiedOrder === undefined) {
      return res.json({
        status: 'order of this id does not exist',
        data: {},
      }).status(200);
    }

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
