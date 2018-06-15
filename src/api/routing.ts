import { ServerRoute } from 'hapi';
import { authRouting } from './auth/routing';
import { usersRouting } from './users/routing';

const routes: ServerRoute[] = [].concat(
  authRouting,
  usersRouting,
);

export { routes };
