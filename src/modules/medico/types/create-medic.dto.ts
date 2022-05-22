import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateMedicDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  cnpj?: string;

  @IsString()
  crm?: string;

  @IsString()
  cfp?: string;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;


  estado: string;

}