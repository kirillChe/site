'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteTemplateElement = sequelize.define('SiteTemplateElement', {
    name: DataTypes.STRING(128),
    data: DataTypes.JSON
  }, {});
  SiteTemplateElement.associate = function ({Site}) {
    SiteTemplateElement.belongsTo(Site, {as: 'site'});
  };
  return SiteTemplateElement;
};
