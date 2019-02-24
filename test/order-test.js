import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import dummyData from '../backend/utils/dummyData';

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
