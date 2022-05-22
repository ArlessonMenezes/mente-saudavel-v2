import { IsNotEmpty, IsString, IsEmail, IsNumberString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty() 
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsNumberString()
    @IsNotEmpty()
    password: string;

    @IsString()
    telefone: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    cnpj?: string;

    @IsString()
    matricula?: string;

    @IsString()
    @IsNotEmpty()
    endereco: string;

    @IsString()
    @IsNotEmpty()
    cidade: string;

    @IsString()
    @IsNotEmpty()
    estado: string;
}