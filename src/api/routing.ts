import { testRouting } from './test/routing';
import { authRouting } from './auth/routing';

const routes: any = [].concat(
  testRouting,
  authRouting,
);

export { routes };
