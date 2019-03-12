'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Sites', [{
      id: 1,
      name: 'Eleganter',
      templateId: 1,
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Sites', null, {});
  }
};
