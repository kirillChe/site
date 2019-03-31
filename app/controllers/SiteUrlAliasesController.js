const db = require('../server').db;
const {SiteUrlAlias} = db;

module.exports = {

  find: async (req, res, next) => {
    try {
      let filter = req.query.filter || {};
      filter.where = filter.where || {};
      const data = await SiteUrlAlias.findAll(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

};
