'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteUrlAliases', [
      {"id":"1","siteId":"1","itemType":"canvas","itemId":"1","alias":"\/","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"2","siteId":"1","itemType":"canvas","itemId":"2","alias":"\/about-us","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"3","siteId":"1","itemType":"canvas","itemId":"3","alias":"\/gallery","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"4","siteId":"1","itemType":"canvas","itemId":"4","alias":"\/contact-us","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"}
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('SiteUrlAliases', null, {});
  }
};
