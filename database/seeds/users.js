
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firebase_id: 'fgasvbehrkiuou485786tgrybdfna', email: 'naruto@mail.com', first_name: 'Naruto', last_name: 'password', profile_url: 'image'},
        {id: 2, firebase_id: 'fgasvbehrkiuou485786tgafdasf4', email: 'asta@mail.com', first_name: 'Asta', last_name: 'Hage', profile_url: 'image'},
        {id: 3, firebase_id: 'fgasvbehrkiuou4857afdasgr5432', email: 'yuno@mail.com', first_name: 'Yuno', last_name: 'Hage', profile_url: 'image'},
      ]);
    });
};
