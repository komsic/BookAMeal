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

  it('get all meals that return with zero meals should indicate with a message', (done) => {
    const copyOfDummyMeals = dummyData.meals.slice();
    dummyData.meals = [];

    chai.request(app)
      .get(API_PREFIX)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('data').with.lengthOf(0);
        expect(res.body).to.have.property('status');
        const { status } = res.body;
        expect(status).to.equal('successful but there is no meal in this list');
        dummyData.meals = copyOfDummyMeals.slice();
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

describe('Meal GET/:id', () => {
  it('it should return a meal with the provided id', (done) => {
    const specifiedId = 1;
    const intendedMeal = dummyData.meals.find(meal => meal.id === specifiedId);

    chai.request(app)
      .get(`${API_PREFIX}/${specifiedId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        const { data } = res.body;
        expect(data).to.have.property('name', intendedMeal.name);
        expect(data).to.have.property('price', intendedMeal.price);
        done();
      });
  });
});

describe('Meal PUT/:id', () => {
  it('it should update meal', (done) => {
    const specifiedId = 1;
    const mealTobeUpdated = dummyData.meals.find(meal => meal.id === specifiedId);
    mealTobeUpdated.name = 'Banga Soup';
    mealTobeUpdated.price = 1000;
    mealTobeUpdated.quantity = 8;

    chai.request(app)
      .put(`${API_PREFIX}/${specifiedId}`)
      .send(mealTobeUpdated)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        const { data } = res.body;
        expect(data).to.have.property('name', mealTobeUpdated.name);
        expect(data).to.have.property('price', mealTobeUpdated.price);
        expect(data).to.have.property('quantity', mealTobeUpdated.quantity);
        done();
      });
  });
});

describe('Meal DELETE/:id', () => {
  it('it should delete the meal with the specified id', (done) => {
    const expectedTotalMealLength = dummyData.meals.length - 1;

    const specifiedId = 1;
    const intendedMealToBeDeleted = dummyData.meals.find(meal => meal.id === specifiedId);

    chai.request(app)
      .delete(`${API_PREFIX}/${specifiedId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        const { data } = res.body;
        expect(data).to.have.property('name', intendedMealToBeDeleted.name);
        expect(data).to.have.property('price', intendedMealToBeDeleted.price);
        expect(dummyData.meals.length).to.equal(expectedTotalMealLength);

        done();
      });
  });
});
