const db = require('../server').db;
const {SiteTemplateElement} = db;

module.exports = {

  find: async (req, res, next) => {
    try {
      let filter = req.query.filter || {};
      filter.where = filter.where || {};
      const data = await SiteTemplateElement.findAll(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },
};
