'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteCanvas = sequelize.define('SiteCanvas', {
    name: DataTypes.STRING(128),
    tree: DataTypes.JSON
  }, {});
  SiteCanvas.associate = function ({Site}) {
    SiteCanvas.belongsTo(Site, {as: 'site'});
  };
  return SiteCanvas;
};
