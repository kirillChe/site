'use strict';
module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define('Site', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM('regular', 'default-site'),
      defaultValue: 'regular'
    },
    accountId: {
      allowNull: false,
      type: DataTypes.BIGINT(20).UNSIGNED
    },
    templateId: {
      allowNull: false,
      type: DataTypes.INTEGER(11).UNSIGNED
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('active', 'inactive', 'suspended'),
      defaultValue: 'active'
    },
    underConstruction: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    subdomain: {
      allowNull: false,
      type: DataTypes.STRING(256),
    },
    domain: {
      allowNull: true,
      type: DataTypes.STRING(256),
    },
  }, {});

  Site.associate = function (models) {
    Site.hasMany(models.SiteCanvas, {as: 'canvases', foreignKey: 'siteId'});
    Site.hasMany(models.SiteFile, {as: 'files', foreignKey: 'siteId'});
    Site.hasMany(models.SiteMenu, {as: 'menu', foreignKey: 'siteId'});
    Site.hasMany(models.SiteOption, {as: 'options', foreignKey: 'siteId'});
    Site.hasMany(models.SiteUrlAlias, {as: 'url-aliases', foreignKey: 'siteId'});
  };
  return Site;
};
