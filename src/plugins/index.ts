import * as config from 'config';
import * as goodPlugin from 'good';
import * as vision from 'vision';
import * as inert from 'inert';
import * as hapiSwagger from 'hapi-swagger';
import * as hapiAuthJwt2 from 'hapi-auth-jwt2';

const version: string = require('../../package.json').version; // tslint:disable-line

let plugins: any[] = [
  {
    plugin: goodPlugin,
    options: config.get('good'),
  },
  vision,
  inert,
  hapiAuthJwt2,
  {
    plugin: hapiSwagger,
    options: {
      debug: true,
      grouping: 'tags',
      info: {
        title: 'API auto-generated docs',
        version,
      },
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
      security: [{ Bearer: [] }],
    },
  },
];

module.exports = plugins;
