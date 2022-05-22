import { Request, Response } from "express";
import { CreateMedicService } from '../service/create-medic.service';
import { UpdateMedicService } from '../service/update-medic.service';

export class MedicController {

  async createMedic(req: Request, res: Response) {
    const medicService = new CreateMedicService();

    const medic = await medicService.execute(req.body)

    return res.status(200).json(medic);
  }

  async medicUpdate(req: Request, res: Response) {
    const { id } = req.params;
    const medicService = new UpdateMedicService();

    const medic = await medicService.execute(+id, req.body)

    return res.status(200).json(medic);
  }

}