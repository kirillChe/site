'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteTemplateElements', [{
      id: 1,
      siteId: 1,
      name: 'logo1',
      data: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('SiteTemplateElements', null, {});
  }
};
