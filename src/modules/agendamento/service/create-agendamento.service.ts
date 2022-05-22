import { Agendamento } from "../entity/angendamento.entity";
import { AppDataSource } from '../../../database/connection';
import AppError from '../../../errors/app.errors';
import { CreateAgendamentoDto } from '../types/create-agendamento.dto';

export class CreateAgendamentoService {

  async execute(agendamento: CreateAgendamentoDto) {
    const agendamentoRepository = AppDataSource.getRepository(Agendamento);

    const scheduleExist = await agendamentoRepository.findOne({
      where: {
        hora: agendamento.hora,
      }
    });

    if (scheduleExist) {
      throw new AppError('there is already an scheduling for that hour');
    };

    const scheduleling = agendamentoRepository.create(agendamento)
    await agendamentoRepository.save(scheduleling);

    return scheduleling;
  }

}