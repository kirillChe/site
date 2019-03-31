'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteContentOptions', [{
      id: 1,
      siteId: 1,
      itemType: 'canvas',
      itemId: 1,
      name: 'layoutId',
      value: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('SiteContentOptions', null, {});
  }
};
