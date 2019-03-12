'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteContentMeta = sequelize.define('SiteContentMeta', {
    key: DataTypes.STRING(256),
    value: DataTypes.TEXT
  }, {
    freezeTableName: true
  });
  SiteContentMeta.associate = function({SiteContent}) {
    SiteContentMeta.belongsTo(SiteContent, {as: 'content', foreignKey: 'contentId'});
  };
  return SiteContentMeta;
};
