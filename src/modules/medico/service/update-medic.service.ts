import { AppDataSource } from "../../../database/connection";
import AppError from "../../../errors/app.errors";
import { Medic } from "../entity/medic.entity";
import { UpdateMedicDto } from "../types/update-medic.dto";

export class UpdateMedicService {

  async execute(id: number, updateMedicDto: UpdateMedicDto ) {
    const medicRepository = AppDataSource.getRepository(Medic);

    const medic = await medicRepository.findOne({
      where: {
        id,
      }
    })

    if (!medic) {
      throw new AppError('Medic not found');
    }

    const medicUpdate = await medicRepository.update(medic.id, {
      ...updateMedicDto
    });

    return medicUpdate;
  }

}