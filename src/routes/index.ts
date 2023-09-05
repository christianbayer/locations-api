import { Router } from 'express';
import apiRoutes from './api';
import swaggerRoutes from './swagger';

const routes = Router();

routes.use(swaggerRoutes);
routes.use(apiRoutes);

export default routes;
