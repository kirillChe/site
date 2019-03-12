'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteOptions', [{
      siteId: 1,
      name: 'domain',
      value: 'site.local',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      siteId: 1,
      name: 'locale',
      value: 'en_US',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      siteId: 1,
      name: 'underConstruction',
      value: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('SiteOptions', null, {});
  }
};
