import "dotenv/config";
import express from 'express';
import cors from 'cors';
import routes from './routes';
import rateLimit from 'express-rate-limit';

const server = express();

server.use(cors());

server.use(rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
}));

server.use(routes);

server.listen(process.env.EXPRESS_PORT || 3000);
