import { testHandler } from './handlers/test';
import { ServerRoute } from 'hapi';

const testRouting: ServerRoute[] = [
  {
    method: 'GET',
    path: '/test',
    handler: testHandler,
    options: {
      description: 'test',
      tags: ['api', 'test'],
    },
  },
  {
    method: 'GET',
    path: '/test/login',
    handler: testHandler,
    options: {
      auth: 'jwt',
      description: 'test login',
      tags: ['api', 'test'],
    },
  },
];

export { testRouting };
