'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteContent', [{
      id: 1,
      siteId: 1,
      type: 'CANVAS',
      name: 'Home',
      value: null,
      permalink: '/',
      layoutId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      siteId: 1,
      type: 'CANVAS',
      name: 'About Us',
      value: null,
      permalink: '/about-us',
      layoutId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      siteId: 1,
      type: 'CANVAS',
      name: 'Contact',
      value: null,
      permalink: '/contact',
      layoutId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface,) => {
    return queryInterface.bulkDelete('SiteContent', null, {});
  }
};
