const server = require('../../app');
const request = require('supertest');
const db = require('../../dbconfig');
const knex = require('knex');
const knexConfig = require('../../knexfile');

const testdb = knex(knexConfig.testing)
beforeAll(async done => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
    return done()
});

describe(`Requests to /admin/ routes`, () => {
    //I will change this test once authentication is installed
    it('Should return 200', async () => {
        const res = await request(server).get('/admin/users');
        console.log('res.body[0] from test', res.body[0])
        expect(res.status).toEqual(200);
    })
});