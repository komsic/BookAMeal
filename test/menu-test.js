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

describe('Menu GET/:id', () => {
  it('it should return a menu with the specified id', (done) => {
    const specifiedId = 1;
    const specifiedMenu = dummyData.menu.find(_menu => _menu.id === specifiedId);

    chai.request(app)
      .get(`${API_PREFIX}/${specifiedId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        const { data } = res.body;
        expect(data).to.have.property('name', specifiedMenu.name);
        expect(data).to.have.property('meals');
        expect(data).to.have.property('id', specifiedMenu.id);
        done();
      });
  });
});
