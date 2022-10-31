
const usersData = require('./seed_data/users');
const leaguesData = require('./seed_data/leagues');

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(usersData);
    })
    .then(() => {
      return knex('leagues').del();
    })
    .then(() => {
      return knex('leagues').insert(leaguesData);
    });
};