const wpms = require('wpms2');
const app = module.exports = wpms.createApp();

app.start = () => {
  // set the port
  const port = process.env.PORT || 3000;
  // start the app
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // eslint-disable-line no-console
    // emit started event
    app.started = true;
    app.emit('started');
  });
};

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
