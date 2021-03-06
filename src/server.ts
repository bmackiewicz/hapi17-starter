import { Server } from 'hapi';
import * as config from 'config';
import { routes } from './api/routing';
import * as plugins from './plugins/index';
import { serverRoutesConfig } from './helpers/server-connection-options';
import * as jwtStrategy from './auth/strategies/jwt';

export async function init(): Promise<Server> {
  const server: Server = new Server({
    host: config.get<string>('server.host'),
    port: config.get<number>('server.port'),
    routes: serverRoutesConfig,
  });
  await server.register(<any>plugins);
  await server.auth.strategy('jwt', 'jwt', jwtStrategy);
  await server.auth.default('jwt');
  await server.route(routes);

  return server;
}
