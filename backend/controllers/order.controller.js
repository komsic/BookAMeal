import OrderService from '../services/order.service';
import ResponseTransformer from '../utils/response.transformer';

class OrderController {
  static async getAllOrder(req, res) {
    OrderService.getAllOrder()
      .then((allOrders) => {
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
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async modifyOrderById(req, res) {
    OrderService.modifyOrderById(req.body, parseInt(req.params.id, 10))
      .then((modifiedOrder) => {
        if (modifiedOrder === undefined) {
          return res.status(404).json({
            status: 'order of this id does not exist',
            data: {},
          });
        }

        return res.json({
          status: 'success',
          data: modifiedOrder,
        }).status(200);
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async makeNewOrder(req, res) {
    OrderService.makeNewOrder(req.body)
      .then(newOrder => res.status(201).json({
        status: 'success',
        data: newOrder,
      })).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }
}

export default OrderController;
