'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Sites', [{
      id: 1,
      name: 'Prospera',
      type: 'default-site',
      templateId: 1,
      accountId: 100,
      status: 'active',
      underConstruction: false,
      subdomain: 'site.local',
      domain: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Sites', null, {});
  }
};
