import { Router } from 'express';
import { CitiesController } from '../controllers';
import { CountriesController } from '../controllers/CountriesController';
import { StatesController } from '../controllers/StatesController';

const routes = Router();

routes.get('/countries', CountriesController.list);
routes.get('/countries/:countryCode/states', StatesController.list);
routes.get('/countries/:countryCode/states/:stateCode/cities', CitiesController.list);

export default routes
