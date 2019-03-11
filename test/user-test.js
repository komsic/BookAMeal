import chai from 'chai';
import { config } from 'dotenv';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import { User } from '../backend/db/models';

config();

chai.use(chaiHttp);
const { expect } = chai;
const API_PREFIX = '/api/v1/auth';

/* global describe it */
describe('User Register', () => {
  it('it should register for user with proper requirements', (done) => {
    const user = {
      name: 'The Chef King',
      email: 'tck@email.com',
      password: 'tck@email.com',
      isAdmin: false,
    };

    chai.request(app)
      .post(`${API_PREFIX}/register`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('auth', true);
        expect(res.body).to.have.property('token');

        done();
      });
  });
});
