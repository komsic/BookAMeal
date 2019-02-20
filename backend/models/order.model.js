class Order {
  constructor(order) {
    this.id = null;
    this.meals = order.meals;
    this.customerName = order.customerName;
    this.catererName = order.catererName;
    this.orderStatus = order.orderStatus;
  }
}

export default Order;
