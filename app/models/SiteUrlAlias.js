'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteUrlAlias = sequelize.define('SiteUrlAlias', {
    itemType: DataTypes.STRING,
    itemId: DataTypes.INTEGER(11).UNSIGNED,
    alias: DataTypes.STRING
  }, {});
  SiteUrlAlias.associate = function ({Site}) {
    SiteUrlAlias.belongsTo(Site, {as: 'site'});
  };
  return SiteUrlAlias;
};
