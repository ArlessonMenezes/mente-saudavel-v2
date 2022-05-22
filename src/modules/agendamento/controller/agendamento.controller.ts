import { Request, Response } from 'express';
import { CreateAgendamentoService } from '../service/create-agendamento.service';

export class AgendamentoController {

  async agendamento(req: Request, res: Response) {

    const agendamentoService = new CreateAgendamentoService();

    const agendamento = await agendamentoService.execute(req.body);

    return res.status(200).json(agendamento);
  }

}