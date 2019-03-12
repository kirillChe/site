'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteMenu = sequelize.define('SiteMenu', {
    name: DataTypes.STRING(128),
    sortOrder: DataTypes.INTEGER(11).UNSIGNED
  }, {
    freezeTableName: true
  });
  SiteMenu.associate = function ({Site, SiteContent}) {
    SiteMenu.belongsTo(Site, {as: 'site'});
    SiteMenu.hasMany(SiteMenu, {as: 'children', foreignKey: 'parentId', through: null});
    SiteMenu.belongsTo(SiteContent, {as: 'content', foreignKey: 'contentId'});

  };
  return SiteMenu;
};
