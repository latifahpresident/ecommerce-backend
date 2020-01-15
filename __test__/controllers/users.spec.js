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
    return done()
});

describe(`Requests to /admin/ routes`, () => {
    //I will change this test once authentication is installed
    describe(`GET routes to /admin/users`, () => {
        it('Should return 200', async () => {
            const res = await request(server).get('/admin/users');
            expect(res.status).toEqual(200);
        });
    
        it('should return the user with name Naruto', async () => {
            const res = await request(server).get('/admin/users/2435rwteray756ue57ghvders');
            expect(res.body).toHaveProperty('id');
            expect(res.body.first_name).toBe('Naruto');
            expect(res.status).toEqual(200);
        });
    });

    it(`PUT request to /admin/user/id is successful`, async () => {
        const updatedUser = {
          firebase_id: '2435rwteray756ue57ghvders',
          email: 'naruto9_hokage7@theleaf.com',
          first_name: 'Naruto',
          last_name: 'Uzumaki',
          profile_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg'
        }
        await request(server).put('/admin/user/2435rwteray756ue57ghvders').send(updatedUser).expect(201);
        const res = await request(server).get('/admin/users/2435rwteray756ue57ghvders');
        expect(res.status).toBe(200);
        expect(res.body.email).toBe('naruto9_hokage7@theleaf.com');
    });

    it(`DELETE user is successful`, async () => {
        const res = await request(server).delete('/admin/user/2435rwteray756ue566ttuyyy').expect(400);
        expect(res.body).toBe('User has been deleted');
    });

   
    describe(`Unsuccessful requests`, () => {
        it(`should return 404 if id is missing`, async () => {
            const res = await request(server).delete('/admin/user/').expect(404);
            console.log(res.body);
        })
    })
});