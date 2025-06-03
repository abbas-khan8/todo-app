import { Request, Response } from 'express';
import { KnexUserRepository } from '../../infrastructure/repositories/KnexUserRepository';

export const getAllUsers = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const users = await KnexUserRepository.getAll();
    res.json(users);
};

export const getUserById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { id } = req.params;

    try {
        const user = await KnexUserRepository.getById(id);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.json(user);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createUser = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const userData = req.body;

    try {
        const newUser = await KnexUserRepository.create(userData);
        res.status(201).json(newUser);
    } catch (err) {
        console.error('[getUserById] Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = req.body;

    try {
        const updatedUser = KnexUserRepository.update(id, userData);
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedUser = KnexUserRepository.delete(id);
        if (!deletedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(204);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
