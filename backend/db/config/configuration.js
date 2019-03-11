import dotenv from 'dotenv';

const { config } = dotenv;
config();

export default {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: 'mavis',
    password: 'mavis',
    database: 'postgres-test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
  travis: {
    username: 'postgres',
    password: '',
    database: 'travis',
    host: 'localhost',
    dialect: 'postgres',
  },
};
