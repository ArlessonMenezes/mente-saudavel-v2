import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateMedicDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  endereco: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;
}