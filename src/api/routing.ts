import { testRouting } from './test/routing';
import { ServerRoute } from 'hapi';
import { authRouting } from './auth/routing';

const routes: ServerRoute[] = [].concat(
  testRouting,
  authRouting,
);

export { routes };
