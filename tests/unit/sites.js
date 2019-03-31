const should = require('chai').should();
const server = require('../../app/server');
const request = require('supertest');

// wait till server is started
before(function (done) {
  if (server.started)
    return done();
  server.once('started', done);
  server.start();
});


let wpmsCtx = {
  requester: {
    id: 12345,
    type: 'user',
    ip: '127.0.0.1'
  },
  scope: {
    resellerId: 'webs',
    accountId: 1000,
    siteId: 9999
  }
};


describe('Test site CRUD APIs', function () {

  let siteId;

  it('(POST /sites) - create site item', function (done) {

    request(server)
      .post('/sites')
      .set('x-wpms-ctx', JSON.stringify(wpmsCtx))
      .send({
        accountId: 1001,
        name: 'My Cool Site',
        subdomain: 'my-cool-site.websplanet.com',
        templateId: 1
      })
      .expect(201)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        let item = {};
        should.not.throw(function () {
          item = JSON.parse(res.text);
        }, 'response is not a JSON');
        item.should.be.an('object');
        item.should.include.keys(['id', 'name', 'templateId']);
        item.name.should.equal('My Cool Site');
        item.templateId.should.equal(1);
        siteId = item.id;

        done();
      });

  });

  it('(GET /sites) - list site items', function (done) {

    request(server)
      .get('/sites')
      .set('x-wpms-ctx', JSON.stringify(wpmsCtx))
      .send()
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        let items = {};
        should.not.throw(function () {
          items = JSON.parse(res.text);
        }, 'response is not a JSON');
        items.should.be.an('array');
        items.length.should.be.above(0);

        done();
      });

  });

  it('(GET /sites/:id) - find site item by id', function (done) {

    if (!siteId)
      return this.skip();

    request(server)
      .get(`/sites/${siteId}`)
      .set('x-wpms-ctx', JSON.stringify(wpmsCtx))
      .send()
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        let item = {};
        should.not.throw(function () {
          item = JSON.parse(res.text);
        }, 'response is not a JSON');
        item.should.be.an('object');
        item.id.should.equal(siteId);
        item.should.include.keys(['id', 'name', 'templateId']);
        item.name.should.equal('My Cool Site');
        item.templateId.should.equal(1);

        done();
      });

  });

  it('(PUT /sites/:id) - update site item', function (done) {

    if (!siteId)
      return this.skip();

    request(server)
      .put(`/sites/${siteId}`)
      .set('x-wpms-ctx', JSON.stringify(wpmsCtx))
      .send({
        name: 'My Super Duper Site'
      })
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        let item = {};
        should.not.throw(function () {
          item = JSON.parse(res.text);
        }, 'response is not a JSON');
        item.should.be.an('object');
        item.should.include.keys(['id', 'name', 'templateId']);
        item.id.should.equal(siteId);
        item.name.should.equal('My Super Duper Site');
        item.templateId.should.equal(1);

        done();
      });

  });

  it('(DELETE /sites/:id) - delete site item', function (done) {

    if (!siteId)
      return this.skip();

    request(server)
      .delete(`/sites/${siteId}`)
      .set('x-wpms-ctx', JSON.stringify(wpmsCtx))
      .send()
      .expect(204)
      .end(done);

  });

});
