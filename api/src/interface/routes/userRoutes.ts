import { Router } from 'express';
import { getAllUsers } from '../controllers/userController';

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
//userRoutes.get("/:id", getUserById);

export default userRoutes;
