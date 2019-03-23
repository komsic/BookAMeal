/* eslint-disable no-unused-vars */
const now = new Date();
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      name: 'The Three Broomstick',
      email: 'ttb@email.com',
      // password: 'ttb@email.comffo',
      password: '$2a$10$fkqNyJoykV9Rwd6aEm8x4uBorPccmj7O5J8E31pTd3GJ6zZQOWnxe',
      isAdmin: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'The Gates Of Heaven',
      email: 'gof@email.com',
      // password: 'gof@email.com',
      password: '$2a$10$QTwN4dwoEAVgjbD9izCJh.qLi9BkwJG.tufSBSBIyuMWhXPyul5nq',
      isAdmin: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'ffo',
      email: 'ffo@email.com',
      // password: 'ffo@email.comffo',
      password: '$2a$10$bJSkPycQY3JFBT9yxLpgp.DJcZ3/sN8pvc3q6h3ptBqasn2G37DUq',
      isAdmin: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Moraine Damondred',
      email: 'md@email.com',
      // password: 'md@email.comffo',
      password: '$2a$10$/pH4fvvSUe2IJpIEnOajTOtjg4eULIIjgyFB.zjpM4UrzgMOgtVXm',
      isAdmin: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Harry Potter',
      email: 'hp@email.com',
      // password: 'hp@email.comffo',
      password: '$2a$10$2UdR5KBQOpssb3ncIJAZgOJcn7j.mTGrF6ux3kno6xqI/WkjUG9Zi',
      isAdmin: false,
      createdAt: now,
      updatedAt: now,
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
