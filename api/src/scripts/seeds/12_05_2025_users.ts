import { faker } from '@faker-js/faker';
import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    await knex('users').del();

    await knex('users').insert(
        Array.from({ length: 5 }).map(() => ({
            id: uuidv4(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            username: faker.internet.username(),
            email: faker.internet.email(),
            password_hash: 'fake-hash-for-dev',
        })),
    );
}
