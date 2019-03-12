const wpms = require('../../wpms2');
const fs = require('fs');

wpms.boot().then(() => {
  fs.writeFile('app/configs/env.json', JSON.stringify(wpms.configs, null, 2), (err) => {
    if (err) throw err;
    console.log('done!'); // eslint-disable-line no-console
  });
});
