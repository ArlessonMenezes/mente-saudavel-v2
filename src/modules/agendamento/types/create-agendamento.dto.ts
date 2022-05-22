import { IsNotEmpty, IsString } from 'class-validator';
import { Medic } from '../../medico/entity/medic.entity';
import { User } from '../../usuario/entity/user.entity';

export class CreateAgendamentoDto {
  @IsString()
  @IsNotEmpty()
  data_agendamento: string;

  @IsString()
  @IsNotEmpty()
  hora: string

  @IsString()
  @IsNotEmpty()
  medic_id: Medic;
  
  @IsString()
  @IsNotEmpty()
  uder_id: User
}