'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteMenu = sequelize.define('SiteMenu', {
    name: DataTypes.STRING(128),
    itemType: {
      type: DataTypes.STRING(128),
    },
    itemId: {
      type: DataTypes.INTEGER(11).UNSIGNED
    },
    sortOrder: DataTypes.INTEGER(11).UNSIGNED
  }, {
    freezeTableName: true
  });
  SiteMenu.associate = function ({Site}) {
    SiteMenu.belongsTo(Site, {as: 'site'});
    SiteMenu.hasMany(SiteMenu, {as: 'children', foreignKey: 'parentId', through: null});
  };
  return SiteMenu;
};
