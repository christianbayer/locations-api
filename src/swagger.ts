import "dotenv/config";
import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Locations API',
    description: 'Lorem'
  },
  host: (process.env.SERVER_HOST || 'localhost') + ':' + (process.env.SERVER_PORT || '3000'),
  basePath: process.env.SERVER_BASE_PATH || '/'
}

const outputFile = './swagger.json';
const endpointsFiles = ['./server.ts'];

const options = {
  disableLogs: false,
  autoHeaders: true,
  autoQuery: true,
  autoBody: true
};

swaggerAutogen(options)(outputFile, endpointsFiles, doc);
