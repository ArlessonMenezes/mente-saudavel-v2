import { IsNotEmpty, IsString } from "class-validator";
import { Column, JoinColumn } from "typeorm";
import { OneToOne } from "typeorm";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";
import { User } from '../../usuario/entity/user.entity';
import { Medic } from '../../medico/entity/medic.entity';

@Entity('agendamento')
export class Agendamento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  data_agendamento: string;

  @Column()
  hora: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @JoinColumn()
  @OneToOne(() => User, user => user.id)
  user: User

  @JoinColumn()
  @OneToOne(() => Medic, medic => medic.id)
  medic: Medic
}