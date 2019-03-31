const {
  SiteCanvasesController,
  SitesController,
  SiteMenuController,
  SiteTemplateElementsController,
  SiteUrlAliasesController,
  SiteWidgetsController,
} = require('require-all')(__dirname + '/../controllers');

module.exports = app => {
  // Site model
  app.get('/sites/lookup', SitesController.lookup);
  app.post('/sites', SitesController.create);
  app.get('/sites', SitesController.find);
  app.get('/sites/:id', SitesController.findById);
  app.put('/sites/:id', SitesController.update);
  app.delete('/sites/:id', SitesController.destroy);
  // SiteMenu model
  app.get('/site-menu', SiteMenuController.find);
  // SiteTemplateElement model
  app.get('/site-template-elements', SiteTemplateElementsController.find);
  // UrlAlias model
  app.get('/site-url-aliases', SiteUrlAliasesController.find);
  // Canvas model
  app.get('/site-canvases', SiteCanvasesController.find);
  app.get('/site-canvases/:id', SiteCanvasesController.findById);
  // SiteWidget model
  app.get('/site-widgets', SiteWidgetsController.find);
  app.get('/site-widget/:id', SiteWidgetsController.findById);
};
