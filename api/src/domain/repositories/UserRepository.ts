import { User } from '../entities/User';

export interface UserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
}
