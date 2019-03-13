import db from '../db/models';

const { Order } = db;

class OrderService {
  static async getAllOrder() {
    try {
      return await Order.findAll({
        include: {
          model: db.Meal,
          as: 'Meals',
        },
      });
    } catch (e) {
      console.log(`###################: ERROR--- ${e}`);
      const error = 'An error just occurred while fetching all orders';
      throw error;
    }
  }

  static async modifyOrderById(modifiedOrder, id) {
    try {
      const updatedOrder = await Order.update(modifiedOrder,
        { returning: true, where: { id } });

      await modifiedOrder.orderedMeals
        .forEach(orderedMeal => updatedOrder[1][0]
          .addMeal(orderedMeal.mealId, { through: { quantity: orderedMeal.quantity } }));

      return updatedOrder[1][0];
    } catch (e) {
      console.log(`###################: ERROR--- ${e}`);
      const error = 'An error just occurred while deleting the meal';
      throw error;
    }
  }

  static async makeNewOrder(order) {
    try {
      const newOrder = await Order.create(order);
      order.orderedMeals.forEach(orderedMeal => newOrder.addMeal(orderedMeal.mealId,
        { through: { quantity: orderedMeal.quantity } }));

      return newOrder;
    } catch (e) {
      console.log(`###################: ERROR--- ${e}`);
      const error = 'An error just occurred while deleting the meal';
      throw error;
    }
  }
}

export default OrderService;
