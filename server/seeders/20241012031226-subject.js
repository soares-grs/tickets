'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'subject',
      [
        {
          name: 'Redefinir senha',
        },
      ],
      {},
    );
  },
  async down(queryInterface) {
    return queryInterface.bulkDelete('subject', null, {});
  },
};
