import { ServerRoute } from 'hapi';
import { createUserHandler } from './handlers/createUser';
import { createUserValidate } from './validators/createUser';

const usersRouting: ServerRoute[] = [
  {
    method: 'POST',
    path: '/users',
    handler: createUserHandler,
    options: {
      auth: 'jwt',
      description: 'create user',
      tags: ['api', 'users'],
      validate: createUserValidate,

    },
  },
];

export { usersRouting };
