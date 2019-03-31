const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../server').db;
const {Site} = db;

module.exports = {

  create: async (req, res, next) => {
    try {
      const model = await Site.create(req.body);
      res.status(201).json(model);
    } catch (error) {
      next(error);
    }
  },

  find: async (req, res, next) => {
    try {
      let filter = req.query.filter || {};
      const data = await Site.findAll(filter);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  findById: async (req, res, next) => {
    try {
      const data = await Site.findByPk(req.params.id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const model = await Site.findByPk(req.params.id);
      if (!model)
        return res.sendStatus(404);
      model.update(req.body);
      res.json(model);
    } catch (error) {
      next(error);
    }
  },

  destroy: async (req, res, next) => {
    try {
      await Site.destroy({
        where: {id: req.params.id},
      });
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },

  lookup: async (req, res, next) => {
    try {
      let filter = {
        where: {
          [Op.or]: [
            {domain: req.query.domain},
            {subdomain: req.query.domain}
          ]
        },
        include: 'options'
      };
      let site = await Site.findOne(filter);
      if (!site)
        return res.sendStatus(404);
      site = site.toJSON();
      site.options = site.options.reduce((obj, option) => {
        obj[option.name] = option.value;
        return obj;
      }, {});
      res.json(site);
    } catch (error) {
      next(error);
    }
  },

};
