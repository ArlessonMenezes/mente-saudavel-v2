import { DataSource } from "typeorm";
import 'dotenv/config';
import { User }  from '../modules/user/entity/user.entity';
import { Medic } from '../modules/medic/entity/medic.entity';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Medic],
})