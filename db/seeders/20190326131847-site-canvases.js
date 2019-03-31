'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteCanvases', [
      {"id":"1","siteId":"1","name":"Home","tree":"[]","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"2","siteId":"1","name":"About Us","tree":"[{\"id\": 1, \"type\": \"widget\"}]","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"3","siteId":"1","name":"Gallery","tree":"[{\"id\": 4, \"type\": \"widget\"}]","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"4","siteId":"1","name":"Contact","tree":"[{\"data\": [[{\"id\": 2, \"type\": \"widget\"}], [{\"id\": 3, \"type\": \"widget\"}]], \"type\": \"column-divider\"}]","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"}
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('SiteCanvases', null, {});
  }
};
