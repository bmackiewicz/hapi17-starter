import { ServerRoute } from 'hapi';
import { createUserHandler } from './handlers/createUser';
import { createUserValidate } from './validators/createUser';
import { listsUsersHandler } from './handlers/listsUsers';
import { getUserValidate } from './validators/getUser';
import { getUserHandler } from './handlers/getUser';
import { deleteUserHandler } from './handlers/deleteUser';
import { patchUserHandler } from './handlers/patchUser';
import { patchUserValidate } from './validators/patchUser';

const usersRouting: ServerRoute[] = [
  {
    method: 'GET',
    path: '/users',
    handler: listsUsersHandler,
    options: {
      auth: 'jwt',
      description: 'get users list',
      tags: ['api', 'users'],
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: getUserHandler,
    options: {
      auth: 'jwt',
      description: 'get user',
      tags: ['api', 'users'],
      validate: getUserValidate,
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: deleteUserHandler,
    options: {
      auth: 'jwt',
      description: 'delete user',
      tags: ['api', 'users'],
      validate: getUserValidate,
    },
  },
  {
    method: 'PATCH',
    path: '/users/{id}',
    handler: patchUserHandler,
    options: {
      auth: 'jwt',
      description: 'update user',
      tags: ['api', 'users'],
      validate: patchUserValidate,
    },
  },
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
