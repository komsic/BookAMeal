import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import MealService from '../backend/services/meal.service';

chai.use(chaiHttp);
const { expect } = chai;
const API_PREFIX = '/api/v1/meals';

/* global describe it */
describe('Meal GET /', () => {
  it('should get all meals', (done) => {
    MealService.fetchAllMeals()
      .then((meals) => {
        const expectedMealLength = meals.length;
        chai.request(app)
          .get(`${API_PREFIX}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('data').with.lengthOf(expectedMealLength);
            done();
          });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
});

describe('Meal POST /', () => {
  it('it should add a meal', (done) => {
    const newMeal = {
      name: 'Moi Moi',
      price: 850,
      quantity: 5,
      userId: 1,
      inMenu: true,
    };

    chai.request(app)
      .post(`${API_PREFIX}`)
      .send(newMeal)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        const { data } = res.body;
        expect(data).to.have.property('name', newMeal.name);
        expect(data).to.have.property('price', newMeal.price);
        expect(data).to.have.property('quantity', newMeal.quantity);
        expect(data).to.have.property('inMenu');
        expect(data).to.have.property('userId', newMeal.userId);
        done();
      });
  });
});

describe('Meal GET/:id', () => {
  it('it should return a meal with the provided id', (done) => {
    const specifiedId = 1;
    MealService.getSingleMeal(specifiedId)
      .then((m) => {
        chai.request(app)
          .get(`${API_PREFIX}/${specifiedId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');

            const { data } = res.body;
            expect(data).to.have.property('name', m.name);
            expect(data).to.have.property('price', m.price);
            expect(data).to.have.property('inMenu', m.inMenu);
            expect(data).to.have.property('quantity', m.quantity);
            expect(data).to.have.property('id', m.id);
            expect(data).to.have.property('userId', m.userId);
            expect(data).to.have.property('Orders');
            done();
          });
      }).catch((err) => {
        console.log(err);
        done();
      });
  });

  it('it should return error if id does not exist', (done) => {
    const specifiedId = 101;

    chai.request(app)
      .get(`${API_PREFIX}/${specifiedId}`)
      .end((err, res) => {
        expect(res).to.have.status(500);
        expect(res.body).to.be.a('object');

        done();
      });
  });
});

describe('Meal PUT/:id', () => {
  it('it should update meal', (done) => {
    const specifiedId = 1;
    const mealTobeUpdated = {
      name: 'Banga Soup',
      price: 1000,
      quantity: 8,
    };

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

  it('it should return error if id does not exist', (done) => {
    const specifiedId = 101;
    const mealTobeUpdated = {
      name: 'Small Chop',
      price: 1000,
      quantity: 8,
    };

    chai.request(app)
      .put(`${API_PREFIX}/${specifiedId}`)
      .send(mealTobeUpdated)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');

        const { status } = res.body;
        expect(status).to.equal('meal of this id does not exist');

        done();
      });
  });
});

describe('Meal DELETE/:id', () => {
  it('it should delete the meal with the specified id', (done) => {
    const specifiedId = 6;

    chai.request(app)
      .delete(`${API_PREFIX}/${specifiedId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        done();
      });
  });

  it('it should return error if id does not exist', (done) => {
    const specifiedId = 101;

    chai.request(app)
      .delete(`${API_PREFIX}/${specifiedId}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');

        done();
      });
  });
});
