'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteMenu', [{
      id: 1,
      siteId: 1,
      contentId: 1,
      name: 'Home',
      sortOrder: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      siteId: 1,
      contentId: 2,
      name: 'About Us',
      sortOrder: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      siteId: 1,
      contentId: 3,
      name: 'Contact',
      sortOrder: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface,) => {
    return queryInterface.bulkDelete('SiteMenu', null, {});
  }
};
