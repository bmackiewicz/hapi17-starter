import { Server } from 'hapi';
import * as config from 'config';
import { routes } from './api/routing';
import * as plugins from './plugins/index';
import { serverRoutesConfig } from './helpers/server-connection-options';

export async function init() {
  const server: Server = new Server({
    host: config.get<string>('server.host'),
    port: config.get<number>('server.port'),
    routes: serverRoutesConfig,
  });
  await server.register(<any>plugins);
  server.route(routes);

  return server;
}
