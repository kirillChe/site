const db = require('./../../server').wpms.db;
const {Site, SiteContent} = db;

module.exports = {

  find: async (req, res, next) => {
    try {
      let filter = req.query.filter || {};
      filter.where = filter.where || {};
      filter.where.type = 'CANVAS';
      const data = await SiteContent.findAll(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  findById: async (req, res, next) => {
    try {
      const canvas = await SiteContent.findByPk(req.params.id);
      if (!canvas)
        return res.sendStatus(404);
      canvas.data = JSON.parse(canvas.data);
      res.json(canvas);
    } catch (error) {
      next(error);
    }
  },

};
