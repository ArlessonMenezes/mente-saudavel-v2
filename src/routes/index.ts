import { Router } from "express";
import userRouter from '../modules/usuario/routes/user.routes';
import medicRouter from "../modules/medico/routes/medic.routes";
import agendamentoRouter from '../modules/agendamento/routes/agendamento.routes';

const routes = Router();

routes.use('/users', userRouter);

routes.use('/medic', medicRouter);

routes.use('/scheduling', agendamentoRouter);

export default routes;