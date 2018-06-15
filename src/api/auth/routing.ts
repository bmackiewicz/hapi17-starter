import { loginValidate } from './validators/login';
import { ServerRoute } from 'hapi';
import { loginHandler } from './handlers/login';

export const authRouting: ServerRoute[] = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: loginHandler,
    options: {
      auth: false,
      description: 'login user',
      tags: ['api', 'auth'],
      validate: loginValidate,
    },
  },
];
