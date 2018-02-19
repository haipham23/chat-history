const Rp = require('chat-rp');
const isAuth = require('chat-auth-mw');

const getAll = require('../apis/getAll');

const rp = new Rp([
  'AUTH_ERROR'
]);

const middlewares = [];
middlewares.push(isAuth);

const routes = [{
  method: 'get',
  path: '/api/health-check',
  func: (req, res) => rp.ok(res, 'ok')
}, {
  method: 'get',
  path: '/api/history/messages',
  middlewares,
  func: (req, res) =>
    getAll(req.headers)
      .then(data => rp.ok(res, data))
      .catch((error) => rp.error(res, error))
}]

module.exports = routes;