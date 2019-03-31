'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteContentOption = sequelize.define('SiteContentOption', {
    itemType: DataTypes.STRING(128),
    itemId: DataTypes.INTEGER(11).UNSIGNED,
    name: DataTypes.STRING(128),
    value: DataTypes.TEXT
  }, {});
  SiteContentOption.associate = function ({Site}) {
    SiteContentOption.belongsTo(Site, {as: 'site'});
  };
  return SiteContentOption;
};
