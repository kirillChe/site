const db = require('../server').db;
const {SiteMenu} = db;

module.exports = {

  find: async (req, res, next) => {
    try {
      let filter = req.query.filter || {};
      const data = await SiteMenu.findAll(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

};
