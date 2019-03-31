'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteFile = sequelize.define('SiteFile', {
    name: DataTypes.STRING(128),
    type: DataTypes.STRING(128),
    url: DataTypes.STRING(512)
  }, {});
  SiteFile.associate = function ({Site}) {
    SiteFile.belongsTo(Site, {as: 'site'});
  };
  return SiteFile;
};
