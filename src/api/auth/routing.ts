import { IRouting } from '../../interfaces/routing';
import { testHandler } from './handlers/login';
import { loginValidate } from './validators/login';

const authRouting: IRouting[] = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: testHandler,
    config: {
      auth: false,
      description: 'login user',
      tags: ['api', 'login'],
      validate: loginValidate,
    },
  },
];

export { authRouting };
