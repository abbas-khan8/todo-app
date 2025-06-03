import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { knexConn } from '../../config/db/connections';

export const KnexUserRepository: UserRepository = {
    async getAll(): Promise<User[]> {
        try {
            const rows = await knexConn('users').select(
                'id',
                'first_name',
                'last_name',
                'username',
                'email',
            );
            return rows.map((row) => ({
                id: row.id,
                firstName: row.first_name,
                lastName: row.last_name,
                username: row.username,
                email: row.email,
            }));
        } catch (err) {
            console.error('Error fetching users:', err);
            return [];
        }
    },
    async getById(id: string): Promise<User | null> {
        try {
            const row = await knexConn('users').where({ id }).first();
            if (row.length === 0) {
            }
            return row
                ? {
                      id: row.id,
                      firstName: row.first_name,
                      lastName: row.last_name,
                      username: row.username,
                      email: row.email,
                  }
                : null;
        } catch (err) {
            console.error('Error fetching user by ID:', err);
            return null;
        }
    },
    create: function (): Promise<User | null> {
        throw new Error('Function not implemented.');
    },
    update: function (): Promise<User | null> {
        throw new Error('Function not implemented.');
    },
    delete: function (): Promise<null> {
        throw new Error('Function not implemented.');
    },
};
