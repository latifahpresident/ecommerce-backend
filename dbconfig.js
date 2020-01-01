const knex = require('knex');
const knexConfig = require('./knexfile.js');
const environment = process.env.NODE_ENV;

const db = knex(knexConfig[environment]);

module.exports = db