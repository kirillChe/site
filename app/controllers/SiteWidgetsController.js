const db = require('../server').db;
const {SiteWidget} = db;

module.exports = {

  find: async (req, res, next) => {
    try {
      let filter = req.query.filter || {};
      filter.where = filter.where || {};
      const data = await SiteWidget.findAll(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  findById: async (req, res, next) => {
    try {
      const widget = await SiteWidget.findByPk(req.params.id);
      if (!widget)
        return res.sendStatus(404);
      res.json(widget);
    } catch (error) {
      next(error);
    }
  },
};
