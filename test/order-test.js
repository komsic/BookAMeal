import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import OrderService from '../backend/services/order.service';

chai.use(chaiHttp);
const { expect } = chai;
const API_PREFIX = '/api/v1/orders';

/* global describe it */
describe('Order GET /', () => {
  it('it should get all orders', (done) => {
    OrderService.getAllOrder()
      .then((orders) => {
        const expectedOrderLength = orders.length;
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
});

describe('Order PUT/:id', () => {
  const orderTobeUpdated = {
    id: 2,
    totalAmount: 5,
    orderStatus: 'BEING PROCESSED',
    orderedMeals: [
      {
        mealId: 1,
        quantity: 5,
      },
      {
        mealId: 2,
        quantity: 5,
      },
    ],
  };

  it('it should update order with the specified id', (done) => {
    const specifiedId = 2;

    chai.request(app)
      .put(`${API_PREFIX}/${specifiedId}`)
      .send(orderTobeUpdated)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        done();
      });
  });

  it('it should return error if id does not exist', (done) => {
    const specifiedId = 101;
    orderTobeUpdated.id = specifiedId;

    chai.request(app)
      .put(`${API_PREFIX}/${specifiedId}`)
      .send(orderTobeUpdated)
      .end((err, res) => {
        expect(res).to.have.status(500);
        expect(res.body).to.be.a('object');

        done();
      });
  });
});

describe('Order POST /', () => {
  it('it should add a new order', (done) => {
    const newOrder = {
      orderedMeals: [
        {
          mealId: 1,
          quantity: 5,
        },
        {
          mealId: 2,
          quantity: 5,
        },
      ],
      orderStatus: 'DISPATCHED',
      totalAmount: 5,
      userId: 1,
    };

    chai.request(app)
      .post(`${API_PREFIX}`)
      .send(newOrder)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');

        const { data } = res.body;
        expect(data).to.have.property('orderStatus', newOrder.orderStatus);
        expect(data).to.have.property('id');
        done();
      });
  });
});
