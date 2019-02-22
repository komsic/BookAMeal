import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import dummyData from '../backend/utils/dummyData';

chai.use(chaiHttp);

const { expect } = chai;

/* global describe it */
describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});

describe('GET /', () => {
  it('should get all meals', (done) => {
    const expectedMealLength = dummyData.meals.length;
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data').with.lengthOf(expectedMealLength);
        done();
      });
  });
});
