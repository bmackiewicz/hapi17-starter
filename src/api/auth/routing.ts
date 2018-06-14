import { testHandler } from './handlers/login';
import { loginValidate } from './validators/login';
import { ServerRoute } from 'hapi';

export const authRouting: ServerRoute[] = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: testHandler,
    options: {
      auth: false,
      description: 'login user',
      tags: ['api', 'login'],
      validate: loginValidate,
    },
  },
];
