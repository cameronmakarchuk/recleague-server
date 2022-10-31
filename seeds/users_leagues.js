
const usersData = require('./seed_data/users');
const leaguesData = require('./seed_data/leagues');
const leagueDetailsData = require('./seed_data/league_details');

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
    })
    .then(() => {
      return knex('league_details').del();
    })
    .then(() => {
      return knex('league_details').insert(leagueDetailsData);
    });
};