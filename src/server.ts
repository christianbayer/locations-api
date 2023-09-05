import "dotenv/config";
import express from 'express';
import cors from 'cors';
import routes from './routes';

const server = express();

server.use(cors());

server.use(routes);

server.listen(process.env.EXPRESS_PORT || 3000);
