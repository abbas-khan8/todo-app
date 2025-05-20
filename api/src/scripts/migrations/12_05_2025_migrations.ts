import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');
    await knex.schema.createTable('users', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('first_name', 100).notNullable();
        table.string('last_name', 100).notNullable();
        table.string('username', 50).notNullable().unique();
        table.string('email', 255).notNullable().unique();
        table.text('password_hash').notNullable();
        table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users');
}
