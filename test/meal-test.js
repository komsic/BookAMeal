import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import dummyData from '../backend/utils/dummyData';
import Meal from '../backend/models/meal.model';

chai.use(chaiHttp);
const { expect } = chai;
const API_PREFIX = '/api/v1/meals';

/* global describe it */
describe('Meal GET /', () => {
  it('should get all meals', (done) => {
    const expectedMealLength = dummyData.meals.length;
    chai.request(app)
      .get(`${API_PREFIX}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('data').with.lengthOf(expectedMealLength);
        done();
      });
  });
});

describe('Meal POST /', () => {
  it('it should add a meal', (done) => {
    const newMeal = new Meal();
    newMeal.name = 'Moi Moi';
    newMeal.price = 850;
    newMeal.quantity = 5;

    chai.request(app)
      .post(`${API_PREFIX}`)
      .send(newMeal)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        const { data } = res.body;
        expect(data).to.have.property('name', newMeal.name);
        expect(data).to.have.property('price', newMeal.price);
        expect(data).to.have.property('quantity', newMeal.quantity);
        done();
      });
  });
});
