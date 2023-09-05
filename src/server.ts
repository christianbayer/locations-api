import "dotenv/config";
import express from 'express';
import cors from 'cors';
import routes from './routes';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const server = express();

server.use(cors());

server.use(rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
}));

server.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

server.use(routes);

server.listen(process.env.SERVER_PORT || 3000);
