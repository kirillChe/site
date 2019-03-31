'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('SiteWidgets', [
      {"id":"1","siteId":"1","name":"Image cards","type":"template-widget","ref":"image-cards","data":"{\"items\": [{\"link\": {\"url\": \"\/\", \"label\": \"Read More\"}, \"image\": {\"src\": \"http:\/\/site.local\/templates\/prospera\/img\/img-01.jpg\"}, \"title\": \"Clean Design\", \"description\": \"Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br> esse molestie consequat, vel illum dolore eu feugiat nulla facilisis\"}, {\"link\": {\"url\": \"\/\", \"label\": \"Read More\"}, \"image\": {\"src\": \"http:\/\/site.local\/templates\/prospera\/img\/img-02.jpg\"}, \"title\": \"Valid code\", \"description\": \"Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br> esse molestie consequat, vel illum dolore eu feugiat nulla facilisis\"}, {\"link\": {\"url\": \"\/\", \"label\": \"Read More\"}, \"image\": {\"src\": \"http:\/\/site.local\/templates\/prospera\/img\/img-03.jpg\"}, \"title\": \"Totally free\", \"description\": \"Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br> esse molestie consequat, vel illum dolore eu feugiat nulla facilisis\"}]}","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"2","siteId":"1","name":"Company Information","type":"template-widget","ref":"company-information","data":null,"createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"3","siteId":"1","name":"Contact Form","type":"template-widget","ref":"contact-form","data":"{\"title\": \"Contact us\", \"submit-button\": \"Submit\"}","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"},
      {"id":"4","siteId":"1","name":"Gallery","type":"template-widget","ref":"gallery","data":"{\"items\": [{\"image\": {\"src\": \"http:\/\/site.local\/templates\/prospera\/img\/portfolio\/thumb-01.jpg\", \"title\": \"Portfolio image 1\"}, \"description\": \"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.\"}, {\"image\": {\"src\": \"http:\/\/site.local\/templates\/prospera\/img\/portfolio\/thumb-02.jpg\", \"title\": \"Portfolio image 2\"}, \"description\": \"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.\"}, {\"image\": {\"src\": \"http:\/\/site.local\/templates\/prospera\/img\/portfolio\/thumb-03.jpg\", \"title\": \"Portfolio image 3\"}, \"description\": \"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.\"}, {\"image\": {\"src\": \"http:\/\/site.local\/templates\/prospera\/img\/portfolio\/thumb-04.jpg\", \"title\": \"Portfolio image 4\"}, \"description\": \"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.\"}]}","createdAt":"2019-03-26 21:24:27","updatedAt":"2019-03-26 21:24:27"}
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('SiteWidgets', null, {});
  }
};
