import { Router } from 'express';
import { MedicController } from '../controller/medic.controller';

const medicRouter = Router();

const medicController = new MedicController();

medicRouter.post('/', medicController.createMedic);



export default medicRouter;