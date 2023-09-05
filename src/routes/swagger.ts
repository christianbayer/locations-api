import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger.json';

const routes = Router();

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default routes;
