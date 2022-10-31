/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id').primary();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('email').notNullable();
            table.string('address').notNullable();
            table.string('city').notNullable();
            table.string('province').notNullable();
            table.string('country').notNullable();
            table.string('postal_code').notNullable();
            table.string('avatar_img').notNullable();
            table.string('password').notNullable();
            table.boolean('is_league_owner').notNullable().defaultTo(false);
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('leagues', (table) => {
            table.increments('id').primary();
            table.integer('league_owner').unsigned().notNullable();
            table.string('name').notNullable();
            table.string('address').notNullable();
            table.string('city').notNullable();
            table.string('province').notNullable();
            table.string('country').notNullable();
            table.string('postal_code').notNullable();
            table.string('sport').notNullable();
            table.string('gender').notNullable();
            table.integer('price').notNullable();
            table.string('start_date').notNullable();
            table.string('end_date').notNullable();
            table.text('description').notNullable();
            table.foreign('league_owner').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        })
        .createTable('league_details', (table) => {
            table.integer('users_id').unsigned().notNullable();
            table.integer('leagues_id').unsigned().notNullable();
            table.foreign('users_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
            table.foreign('leagues_id').references('id').inTable('leagues').onUpdate('CASCADE').onDelete('CASCADE');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('league_details').dropTable('leagues').dropTable('users');
};
