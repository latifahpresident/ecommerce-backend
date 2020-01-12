const server = require('../../app');
const request = require('supertest');
const db = require('../../dbconfig');
const knex = require('knex');
const knexConfig = require('../../knexfile');

const testdb = knex(knexConfig.testing)
// beforeAll(async done => {
//     await db.migrate.rollback();
//     await db.migrate.latest();
//     await db.seed.run();
//     return done()
// });

// describe(`Get request to /admin/users route`, () => {
//     it('Should return 200', async () => {
//         const res = await request(server).get('/users');
//         expect(res.status).toEqual(404);
//     })
// });

// const server = require('../app.js');
// const request = require('supertest');
// const db = require('../database/dbconfig');

beforeAll(async done => {
    
    await testdb.migrate.rollback();
  
    await testdb.migrate.latest();
    await testdb.seed.run();
    return done();
  });

  const usersRoute = '/users';

  describe(`GET ${usersRoute}`, () => {
    it("Should return 200", async () => {
      const res = await request(server).get(`${usersRoute}`);
      expect(res.status).toEqual(200);
    });
    //will need to figure out how to test auth
    // describe(`POST ${usersRoute}/register`, () => {
    //     it('Should return 201', async () => {
    //         const res = await request(server)
    //         .post(`${usersRoute}/register`)
    //         .send({
    //             email: 'Heath_Kreiger@hotmail.com',
    //             firebase_id: 'hwby91io',
    //             user_type: 'market'
    //         })
    //         expect(res.status).toBe(201);
    //     })
    // })
  });