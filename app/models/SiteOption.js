'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteOption = sequelize.define('SiteOption', {
    name: DataTypes.STRING(128),
    value: DataTypes.TEXT
  }, {});
  SiteOption.associate = function({Site}) {
    SiteOption.belongsTo(Site, {as: 'site'});
  };
  return SiteOption;
};
