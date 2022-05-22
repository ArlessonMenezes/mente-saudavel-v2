import { Router } from 'express';
import { UserController } from '../controller/user.controller';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/', userController.createUser);

userRoutes.patch('/update/:id', userController.updateUser);

export default userRoutes;