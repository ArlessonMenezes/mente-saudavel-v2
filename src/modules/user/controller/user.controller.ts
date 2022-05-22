import { Request, Response } from "express";
import { CreateUserService } from '../service/create-user.service';
import { UpdateUserService } from '../service/update-user.service';

export class UserController {

    async createUser(req: Request, res: Response) {

        const userService = new CreateUserService();

        const user = await userService.execute(req.body);

        return res.status(200).json(user);
    };

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;

        const userRepository = new UpdateUserService();

        const user = await userRepository.execute(+id, req.body);

        return res.status(200).json(user);
    }
};