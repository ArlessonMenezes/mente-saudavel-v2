import { CreateUserDto } from "../types/create-user.dto";
import AppError from '../../../errors/app.errors';
import { AppDataSource } from "../../../database/connection";
import { User } from "../entities/user.entity";
import { hash } from 'bcrypt';

export class CreateUserService {

    async execute(createUserDto: CreateUserDto) {
        const userRepository = AppDataSource.getRepository(User);

        const userExist = await userRepository.findOne({
            where: {
                email: createUserDto.email,
            }
        });
            
        if (userExist) {
            throw new AppError("there is already a user with this email", 409);
        }

        const userCpf = await userRepository.findOne({
            where: {
                cpf: createUserDto.cpf,
            }
        })

        if (userCpf) {
            throw new AppError("there is already a user with this cpf", 409);
        }

        const hashedPassword = await hash(createUserDto.password, 10);
        createUserDto.password = hashedPassword;

        const user = userRepository.create(createUserDto);
        await userRepository.save(user);

        return user;
    }

}