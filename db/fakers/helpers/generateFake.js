const jsf = require('json-schema-faker');

module.exports = schema => {
  jsf.extend('faker', () => require('faker'));

  return jsf.generate(schema).extendedSchema;
};
