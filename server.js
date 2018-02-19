require('dotenv').config();

const GenericService = require('chat-ms');

const routes = require('./routes');

new GenericService({
  routes,
  port: 8080,
  mongoUrl: process.env.MONGO_URL
}).init();