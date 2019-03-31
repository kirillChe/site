const db = require('../server').db;
const {SiteCanvas} = db;

module.exports = {

  find: async (req, res, next) => {
    try {
      let filter = req.query.filter || {};
      filter.where = filter.where || {};
      const data = await SiteCanvas.findAll(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  findById: async (req, res, next) => {
    try {
      const canvas = await SiteCanvas.findByPk(req.params.id);
      if (!canvas)
        return res.sendStatus(404);
      res.json(canvas);
    } catch (error) {
      next(error);
    }
  },

};
