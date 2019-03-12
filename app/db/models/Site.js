'use strict';
module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define('Site', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    templateId: {
      allowNull: false,
      type: DataTypes.INTEGER(11).UNSIGNED
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED'),
      defaultValue: 'ACTIVE'
    }
  }, {});

  Site.associate = function (models) {
    Site.hasMany(models.SiteOption, {as: 'options', foreignKey: 'siteId'});
    Site.hasMany(models.SiteContent, {as: 'content', foreignKey: 'siteId'});
    Site.hasMany(models.SiteMenu, {as: 'menu', foreignKey: 'siteId'});
  };
  return Site;
};
