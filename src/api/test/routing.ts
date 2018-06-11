import { IRouting } from '../../interfaces/routing';
import { testHandler } from './handlers/test';

const testRouting: IRouting[] = [
  {
    method: 'GET',
    path: '/test',
    handler: testHandler,
    config: {
      description: 'test',
      tags: ['api', 'test'],
    },
  },
];

export { testRouting };
