#!/usr/bin/env node

const wpms = require('./../wpms2');
const fs = require('fs');

if (!fs.existsSync('/app/configs/env.json')) {
  wpms.boot(null, __dirname + '/../app').then(() => {
    fs.writeFile('app/configs/env.json', JSON.stringify(wpms.configs, null, 2), (err) => {
      if (err) throw err;
      console.log('env.json created'); // eslint-disable-line no-console
    });
  });
}
