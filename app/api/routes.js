const {
  SitesController,
  SiteContentController,
  SiteMenuController,
} = require('require-all')(__dirname + '/controllers');

module.exports = app => {

  app.get('/sites/lookup', SitesController.lookup);
  app.post('/sites', SitesController.create);
  app.get('/sites', SitesController.find);
  app.get('/sites/:id', SitesController.findById);
  app.put('/sites/:id', SitesController.update);
  app.delete('/sites/:id', SitesController.destroy);

  app.get('/site-content', SiteContentController.find);

  app.get('/site-menu', SiteMenuController.find);
};
