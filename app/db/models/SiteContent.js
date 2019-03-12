'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteContent = sequelize.define('SiteContent', {
    type: DataTypes.STRING(128),
    name: DataTypes.STRING(256),
    value: DataTypes.TEXT,
    sortOrder: DataTypes.INTEGER(11).UNSIGNED,
    permalink: DataTypes.STRING(256),
    layoutId: DataTypes.INTEGER(11).UNSIGNED,
  }, {
    freezeTableName: true
  });
  SiteContent.associate = function ({Site, SiteContentMeta, SiteMenu}) {
    SiteContent.belongsTo(Site, {as: 'site'});
    SiteContent.hasMany(SiteContent, {as: 'children', foreignKey: 'parentId', through: null});
    SiteContent.hasMany(SiteContentMeta, {as: 'meta', foreignKey: 'contentId', through: null});
    SiteContent.hasOne(SiteMenu, {foreignKey: 'contentId'});
  };
  return SiteContent;
};
