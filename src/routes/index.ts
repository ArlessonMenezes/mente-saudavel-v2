import { Router } from "express";
import userRouter from '../modules/user/routes/user.routes';
import medicRouter from "../modules/medic/routes/medic.routes";

const routes = Router();

routes.use('/users', userRouter);

routes.use('/medic', medicRouter)

export default routes;