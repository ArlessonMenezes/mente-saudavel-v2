import { Request, Response } from "express";
import { CreateUserService } from '../service/create-user.service';

export class UserController {

    async createUser(req: Request, res: Response) {
        
        const userService = new CreateUserService();

        const user = await userService.execute(req.body);

        return res.status(200).json(user);
    };
};