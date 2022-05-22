import { UpdateUserDto } from "../types/update-user.dto";
import { AppDataSource } from '../../../database/connection';
import { User } from '../entities/user.entity';
import AppError from '../../../errors/app.errors';

export class UpdateUserService {

    async execute(id: number, updateUserDto: UpdateUserDto) {
        const userRepository = AppDataSource.getRepository(User);

        const user = await userRepository.findOne({
            where: {
                id,
            }
        })

        if (!user) {
            throw new AppError('user not found');
        }

        const userUpdate = await userRepository.update(user.id, {
            ...updateUserDto
        });

        return userUpdate;
    }

}