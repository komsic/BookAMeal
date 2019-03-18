require('dotenv').config();

module.exports = {
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
    database: 'postgrestest',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    host: 'ec2-23-23-195-205.compute-1.amazonaws.com',
    database: 'de6me30s16c1cr',
    username: 'mqzsjsewlqoixt',
    port: 5432,
    password: '8e912f3ef8772080fd239dc57d9841288627796c5006fca9ff4019ece12dc041',
    dialect: 'postgres',
    sslmode: require,
    define: {
      timestamps: false,
    },
  },
  travis: {
    username: 'postgres',
    password: '',
    database: 'travis',
    host: 'localhost',
    dialect: 'postgres',
  },
};
