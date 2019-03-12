const db = require('./../../server').wpms.db;
const {SiteContent} = db;

module.exports = {

  find: async (req, res, next) => {
    try {
      let filter = req.query.filter || {};
      const data = await SiteContent.findAll(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

};
