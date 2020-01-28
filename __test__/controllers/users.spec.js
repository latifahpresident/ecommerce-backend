const server = require('../../app');
const request = require('supertest');
const db = require('../../dbconfig');
const knex = require('knex');
const knexConfig = require('../../knexfile');

//const testdb = knex(knexConfig.testing)
beforeAll(async done => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
    return done();
});

const updatedUser = {
    firebase_id: '2435rwteray756ue57ghvders',
    email: 'naruto9_hokage7@theleaf.com',
    first_name: 'Naruto',
    last_name: 'Uzumaki',
    profile_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg'
  }

describe(`Requests to /admin/ routes`, () => {
    //I will change this test once authentication is installed
    describe(`GET routes to /admin/users`, () => {
        it('Should return 200', async () => {
            const res = await request(server).get('/admin/users');
            expect(res.status).toEqual(200);
        });
    
        it('should return the user with name Naruto', async () => {
            const res = await request(server).get('/admin/user/2435rwteray756ue57ghvders');
            // expect(res.body).toHaveProperty('firebase_id');
            expect(res.body.first_name).toBe('Naruto');
            expect(res.status).toEqual(200);
        });
    });

    it(`PUT request to /admin/user/id is successful`, async () => {
        const res = await request(server).put('/admin/user/2435rwteray756ue57ghvders').send(updatedUser).expect(201)
        expect(res.body).toBe(1);
    });

    it(`PUT request with no body should return 500`, async () => {
        const res = await request(server).put('/admin/user/2435rwteray756ue57ghvders').send().expect(500);
        expect(res.status).toBe(500);
    });
    
    it(`PUT request with no id should return 400`, async () => {
        const res = await request(server).put('/admin/user/').send(updatedUser).expect(404);
        expect(res.status).toBe(404);
    });

    it(`DELETE user is successful`, async () => {
        const res = await request(server).delete('/admin/user/2435rwteray756ue566ttuyyy').expect(200);
        expect(res.body).toBe('User has been deleted');
    });
});

 
describe(`Unsuccessful requests`, () => {
    it(`GET request to /admin/user/id`, async () => {
        const res = await request(server).get('/admin/user/9000000');
        expect(res.status).toBe(404);
    });
    it(`DELETE should return 404 if id is missing when deleting a user`, async () => {
        const res = await request(server).delete('/admin/user/').expect(404);
        expect(res.status).toBe(404);
    });
})