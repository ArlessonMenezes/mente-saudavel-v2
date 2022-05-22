import { CreateMedicDto } from "../types/create-medic.dto";
import { AppDataSource } from '../../../database/connection';
import { Medic } from "../entity/medic.entity";
import AppError from '../../../errors/app.errors';
import { hash } from "bcrypt";

export class CreateMedicService {

  async execute(createMedicDto: CreateMedicDto) {
    const medicRepository = AppDataSource.getRepository(Medic);

    const medicEmail = await medicRepository.findOne({
      where: {
        email: createMedicDto.email,
      }
    })

    if (medicEmail) {
      throw new AppError('there is already a doctor with this email');
    }

    const medicCPF = await medicRepository.findOne({
      where: {
        cpf: createMedicDto.cpf,
      }
    })

    if (medicCPF) {
      throw new AppError('there is already a doctor with this cpf');
    }

    const hashedPassword = await hash(createMedicDto.password, 10);
    createMedicDto.password = hashedPassword;

    const medic = medicRepository.create(createMedicDto);
    await medicRepository.save(medic);

    return medic;
  }

}