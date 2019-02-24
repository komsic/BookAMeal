import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import dummyData from '../backend/utils/dummyData';
import Order from '../backend/models/order.model';

chai.use(chaiHttp);
const { expect } = chai;
const API_PREFIX = '/api/v1/orders';

/* global describe it */
describe('Order GET /', () => {
  it('it should get all orders', (done) => {
    const expectedOrderLength = dummyData.orders.length;
    chai.request(app)
      .get(`${API_PREFIX}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('data').with.lengthOf(expectedOrderLength);
        done();
      });
  });
});


describe('Order PUT/:id', () => {
  it('it should update order with the specified id', (done) => {
    const specifiedId = 1;
    const orderTobeUpdated = dummyData.orders.find(order => order.id === specifiedId);
    orderTobeUpdated.customerName = 'Matrim Cauthon';
    orderTobeUpdated.catererName = 'The Gates Of Heaven';
    orderTobeUpdated.orderStatus = 'BEING PROCESSED';
    orderTobeUpdated.meals = dummyData.meals;

    chai.request(app)
      .put(`${API_PREFIX}/${specifiedId}`)
      .send(orderTobeUpdated)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        const { data } = res.body;
        expect(data).to.have.property('customerName', orderTobeUpdated.customerName);
        expect(data).to.have.property('catererName', orderTobeUpdated.catererName);
        expect(data).to.have.property('orderStatus', orderTobeUpdated.orderStatus);
        expect(data).to.have.property('id', specifiedId);
        expect(data).to.have.property('meals').with.lengthOf(dummyData.meals.length);
        done();
      });
  });
});

describe('Order POST /', () => {
  it('it should add a new order', (done) => {
    const order = {
      meals: dummyData.meals,
      customerName: 'Perrin Aybara',
      catererName: 'The Winespring Inn',
      orderStatus: 'DISPATCHED',
    };
    const newOrder = new Order(order);

    chai.request(app)
      .post(`${API_PREFIX}`)
      .send(newOrder)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');

        const { data } = res.body;
        expect(data).to.have.property('customerName', newOrder.customerName);
        expect(data).to.have.property('catererName', newOrder.catererName);
        expect(data).to.have.property('orderStatus', newOrder.orderStatus);
        expect(data).to.have.property('meals').with.lengthOf(dummyData.meals.length);
        expect(data).to.have.property('id');
        done();
      });
  });
});