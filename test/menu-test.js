import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import dummyData from '../backend/utils/dummyData';

chai.use(chaiHttp);
const { expect } = chai;
const API_PREFIX = '/api/v1/menu';

/* global describe it */
describe('Menu GET/', () => {
  it('it should get all menu', (done) => {
    const expectedMenuLength = dummyData.menu.length;

    chai.request(app)
      .get(API_PREFIX)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('data').with.lengthOf(expectedMenuLength);
        done();
      });
  });
});
