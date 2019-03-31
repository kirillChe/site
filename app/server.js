const wpms = require('./../wpms2');
const app = module.exports = wpms.createApp();

// Bootstrap the application, load configurations,
// Configure database, routes and middleware.
wpms.boot(app, __dirname)
  .then(() => {
    // start app automatically only if this module was run directly
    // from the command line like 'node app.js'
    if (require.main === module)
      app.start();
  })
  .catch(err => {
    console.log(`ERROR: ${err.message}`);
    process.exit(1);
  });
