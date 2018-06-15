import { testRouting } from './test/routing';
import { ServerRoute } from 'hapi';
import { authRouting } from './auth/routing';
import { usersRouting } from './users/routing';

const routes: ServerRoute[] = [].concat(
  testRouting,
  authRouting,
  usersRouting,
);

export { routes };
