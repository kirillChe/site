'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteMenu', [
      {"id":"1","siteId":"1","parentId":null,"itemType":"canvas","itemId":"1","name":"Home","sortOrder":"1","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"2","siteId":"1","parentId":null,"itemType":"canvas","itemId":"2","name":"About Us","sortOrder":"2","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"3","siteId":"1","parentId":null,"itemType":"canvas","itemId":"3","name":"Gallery","sortOrder":"3","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"4","siteId":"1","parentId":null,"itemType":"canvas","itemId":"4","name":"Contact","sortOrder":"4","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"}
    ], {});
  },

  down: (queryInterface,) => {
    return queryInterface.bulkDelete('SiteMenu', null, {});
  }
};
