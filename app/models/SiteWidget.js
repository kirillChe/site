'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteWidget = sequelize.define('SiteWidget', {
    name: DataTypes.STRING(128),
    type: {
      allowNull: false,
      type: DataTypes.ENUM(
        'template-widget',
      ),
      defaultValue: 'template-widget'
    },
    ref: DataTypes.STRING(128),
    data: DataTypes.JSON
  }, {});
  SiteWidget.associate = function ({Site}) {
    SiteWidget.belongsTo(Site, {as: 'site'});
  };
  return SiteWidget;
};
