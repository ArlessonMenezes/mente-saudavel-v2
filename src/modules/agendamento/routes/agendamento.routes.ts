import { Router } from 'express';
import { AgendamentoController } from '../controller/agendamento.controller';

const agendamentoRouter = Router();

const agendamentoController = new AgendamentoController()

agendamentoRouter.post('/', agendamentoController.agendamento);

export default agendamentoRouter;