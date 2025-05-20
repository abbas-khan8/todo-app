import { Request, Response } from 'express';
import { KnexUserRepository } from '../../infrastructure/repositories/KnexUserRepository';

export const getAllUsers = async (_req: Request, res: Response) => {
    const users = await KnexUserRepository.findAll();
    res.json(users);
};
