import OrderService from '../services/order.service';

const OrderController = {
  getAllOrder(req, res) {
    const allOrders = OrderService.getAllMenu();

    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },
};

export default OrderController;
