import "dotenv/config";
import express from 'express';
import cors from 'cors';
import routes from './routes';

const port = process.env.EXPRESS_PORT || 3000;
const server = express();

server.use(cors({ origin: '*' }));

server.disable('x-powered-by');

server.use(routes);

server.listen(port, () => {
  console.log(`Litening on port ${port}!`);
});
