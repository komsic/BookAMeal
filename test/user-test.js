import chai from 'chai';
import { config } from 'dotenv';
import chaiHttp from 'chai-http';
import app from '../backend/index';
import db from '../backend/db/models';

const { User } = db;
config();

chai.use(chaiHttp);
const { expect } = chai;
const API_PREFIX = '/api/v1/auth';

/* global describe it beforeEach */
describe('USER', () => {
  // beforeEach((done) => {
  //   User.destroy({
  //     where: {
  //       description: null,
  //     },

  //   });

  //   done();
  // });
  const realUser = {
    name: 'The Chef King',
    email: 'tck@email.com',
    password: 'tck@email.com',
    isAdmin: false,
  };

  describe('User Register', () => {
    it('it should register for user with proper requirements', (done) => {

      chai.request(app)
        .post(`${API_PREFIX}/register`)
        .send(realUser)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('auth', true);
          expect(res.body).to.have.property('token');

          done();
        });
    });

    it('it should throw error if email is a not in request body', (done) => {
      const user = {
        name: 'The Chef King',
        password: 'tck@email.com',
        isAdmin: false,
      };

      chai.request(app)
        .post(`${API_PREFIX}/register`)
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(422);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('error');

          done();
        });
    });

    it('it should throw error if password is a not in request body', (done) => {
      const user = {
        name: 'The Chef King',
        email: 'tck@email.com',
        isAdmin: false,
      };

      chai.request(app)
        .post(`${API_PREFIX}/register`)
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(422);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('error');

          done();
        });
    });
  });

  describe('User Login', () => {
    it('it should login with valid password and email', (done) => {
      chai.request(app)
        .post(`${API_PREFIX}/login`)
        .send(realUser)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('auth', true);
          expect(res.body).to.have.property('token');

          done();
        });
    });

    it('it should throw error if login with wrong password', (done) => {
      const userWithWrongPassword = {
        email: realUser.email,
        password: 'seleca',
      };

      chai.request(app)
        .post(`${API_PREFIX}/login`)
        .send(userWithWrongPassword)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('auth', false);
          expect(res.body).to.have.property('token', null);

          done();
        });
    });

    it('it should throw error if login with wrong email', (done) => {
      const userWithWrongEmail = {
        email: 'human@email.com',
        password: realUser.password,
      };

      chai.request(app)
        .post(`${API_PREFIX}/login`)
        .send(userWithWrongEmail)
        .end((err, res) => {
          expect(res).to.have.status(404);

          done();
        });
    });
  });
});
