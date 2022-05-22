import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import { AppDataSource } from './database/connection';
import AppError from './errors/app.errors';
import routes from './routes';

const app = express();
app.use(cors());

AppDataSource.initialize()
    .then(() => {
        console.log('App successfully connected to the database')
    })
    .catch((err: Error) => console.log('App failed to connect to database' + err))

app.use(express.json());


app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.use(errors());

app.use(
    (
        error: Error, 
        req: Request, 
        res: Response, 
        next: NextFunction
    ) => {
        if (error instanceof AppError) {
            return res.status(error.statusCode)
            .send({status: 'error', message: error.message })
        }
})

app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
