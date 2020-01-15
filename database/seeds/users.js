// const faker = require('faker');

// exports.seed = function(knex, Promise) {

//   createFakerUser = () => {
//     return { //this is all the information that we need faked. Will return and object
//       firebase_id: faker.random.alphaNumeric(16),
//       email: faker.internet.email(),
//       first_name: faker.name.firstName(),
//       last_name: faker.name.lastName(),
//       profile_url: faker.image.avatar()
//     }
//   }

//   const users = []; //will hold our fake users
//   const numOfFakes = 500;

//   for (let i = 0; i < numOfFakes; i++) {
//     users.push(createFakerUser(i)) //push each new faker user into the users array
//   }

//   return (
//     knex('users') //access the users table
//       .then(function() {
//         return knex ('users').insert(users) //insert the users array into the users table
//       })
//   )
  
// };


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          'firebase_id': '2435rwteray756ue57ghvders',
          'email': 'hokage7@theleaf.com',
          'first_name': 'Naruto',
          'last_name': 'Uzumaki',
          'profile_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg'
        }, {
          'firebase_id': '34rweafrt32452awrerfaew',
          'email': 'tsunade_sama@leaf.com',
          'first_name': 'Tsunade',
          'last_name': 'Senju',
          'profile_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/kaelifa/128.jpg'
        }, {
          'firebase_id': '2435rwteray756ue5y5etrg',
          'email': 'kakashi@leaf.com',
          'first_name': 'Kakashi',
          'last_name': 'Hatake',
          'profile_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/hgharrygo/128.jpg'
        },  {
          'firebase_id': '2435rwteray756ue566ttuyyy',
          'email': 'hiruzen_sarutobi@leaf.com',
          'first_name': 'Hiruzen',
          'last_name': 'Sarutobi',
          'profile_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/timothycd/128.jpg'
        }
      ]);
    });
};