import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import MenuService from '../backend/services/menu.service';

chai.use(chaiHttp);
const { expect } = chai;
const API_PREFIX = '/api/v1/menu';

/* global describe it */
describe('Menu GET/', () => {
  it('it should get all menu', (done) => {
    MenuService.fetchAllMenu()
      .then((menu) => {
        const expectedMenuLength = menu.length;

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
});

// describe('Menu GET/:id', () => {
//   it('it should return a menu with the specified id', (done) => {
//     const specifiedId = 1;

//     chai.request(app)
//       .get(`${API_PREFIX}/${specifiedId}`)
//       .end((err, res) => {
//         console.log(res.body);

//         // expect(res).to.have.status(200);
//         // expect(res.body).to.be.a('object');

//         // const { data } = res.body;
//         // expect(data).to.have.property('name');
//         // expect(data).to.have.property('meals');
//         // expect(data).to.have.property('id', specifiedId);
//         done();
//       });
//   });

// it('it should return error if id does not exist', (done) => {
//   const specifiedId = 101;

//   chai.request(app)
//     .get(`${API_PREFIX}/${specifiedId}`)
//     .end((err, res) => {
//       expect(res).to.have.status(404);
//       expect(res.body).to.be.a('object');

//       const { status } = res.body;
//       expect(status).to.equal('menu of this id does not exist');

//       done();
//     });
// });
// });

// describe('Menu PUT/:id', () => {
//   it('it should update menu by id', (done) => {
//     const specifiedId = 1;
//     const menuTobeUpdated = dummyData.menu.find(_menu => _menu.id === specifiedId);
//     menuTobeUpdated.name = 'The Gates Of Heaven';
//     menuTobeUpdated.meals = dummyData.meals;

//     chai.request(app)
//       .put(`${API_PREFIX}/${specifiedId}`)
//       .send(menuTobeUpdated)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a('object');

//         const { data } = res.body;
//         expect(data).to.have.property('name', menuTobeUpdated.name);
//         expect(data).to.have.property('meals').with.lengthOf(dummyData.meals.length);
//         expect(data).to.have.property('id', menuTobeUpdated.id);
//         done();
//       });
//   });

//   it('it should return error if id does not exist', (done) => {
//     const specifiedId = 101;
//     const menuTobeUpdated = new Menu('Guraj', dummyData.meals);
//     menuTobeUpdated.id = specifiedId;

//     chai.request(app)
//       .put(`${API_PREFIX}/${specifiedId}`)
//       .send(menuTobeUpdated)
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         expect(res.body).to.be.a('object');

//         const { status } = res.body;
//         expect(status).to.equal('menu of this id does not exist');

//         done();
//       });
//   });
// });

// describe('Menu POST /', () => {
//   it('it should add a new menu', (done) => {
//     const newMenu = {
//       id: 1,
//       name: 'Greasy Sae Kitchen',
//       meals: [
//         {
//           id: 1,
//           name: 'SDPO',
//           price: 500,
//         },
//       ],
//     };

//     chai.request(app)
//       .post(`${API_PREFIX}`)
//       .send(newMenu)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.an('object');
//         const { data } = res.body;
//         expect(data).to.have.property('name', 'Greasy Sae Kitchen');
//         expect(data).to.have.property('meals').with.lengthOf(1);
//         expect(data).to.have.property('id');
//         done();
//       });
//   });
// });
