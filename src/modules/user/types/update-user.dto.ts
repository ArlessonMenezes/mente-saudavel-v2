import { IsEmail, IsInt, IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    telefone: string;

    @IsString()
    endereco: string;

    @IsString()
    cidade: string;

    @IsString()
    estado: string;
}