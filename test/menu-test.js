import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import dummyData from '../backend/utils/dummyData';
import Menu from '../backend/models/menu.model';

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

  it('get all menu that return with zero menu should indicate with a message', (done) => {
    const copyOfDummyMenu = dummyData.menu.slice();
    dummyData.menu = [];

    chai.request(app)
      .get(API_PREFIX)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('data').with.lengthOf(0);
        expect(res.body).to.have.property('status');
        const { status } = res.body;
        expect(status).to.equal('successful but there is no menu in this list');
        dummyData.menu = copyOfDummyMenu.slice();
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

describe('Menu PUT/:id', () => {
  it('it should update menu by id', (done) => {
    const specifiedId = 1;
    const menuTobeUpdated = dummyData.menu.find(_menu => _menu.id === specifiedId);
    menuTobeUpdated.name = 'The Gates Of Heaven';
    menuTobeUpdated.meals = dummyData.meals;

    chai.request(app)
      .put(`${API_PREFIX}/${specifiedId}`)
      .send(menuTobeUpdated)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        const { data } = res.body;
        expect(data).to.have.property('name', menuTobeUpdated.name);
        expect(data).to.have.property('meals').with.lengthOf(dummyData.meals.length);
        expect(data).to.have.property('id', menuTobeUpdated.id);
        done();
      });
  });
});

describe('Menu POST /', () => {
  it('it should add a new menu', (done) => {
    const newMenu = new Menu('The Stag And Lion', dummyData.meals);

    chai.request(app)
      .post(`${API_PREFIX}`)
      .send(newMenu)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        const { data } = res.body;
        expect(data).to.have.property('name', newMenu.name);
        expect(data).to.have.property('meals').with.lengthOf(dummyData.meals.length);
        expect(data).to.have.property('id');
        done();
      });
  });
});
