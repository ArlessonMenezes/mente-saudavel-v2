import 'reflect-metadata'
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import { AppDataSource } from './database/connection';

//import routes from './routes';

// Cross Origin Resource Sharing (CORS) é um mecanismo que permite
// que recursos restritos em uma página da web sejam solicitados a partir 
// de um domínio/endereço distinto.

const app = express();
app.use(cors());

// app.use(cors({
//     origin: ['dominio.com.br', 'aluiziodeveloper.com.br']
// }));

AppDataSource.initialize()
    .then(() => {
        console.log('App successfully connected to the database')
    })
    .catch((err) => console.log('App failed to connect to database' + err))

app.use(express.json());

//app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, () => {
    console.log('Server started on port 3333! 😎');
});
