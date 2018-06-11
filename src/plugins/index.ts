import * as config from 'config';
import * as goodPlugin from 'good';
import * as vision from 'vision';
import * as inert from 'inert';
import * as hapiSwagger from 'hapi-swagger';

const version: string = require('../../package.json').version; // tslint:disable-line

let plugins: any[] = [
  {
    plugin: goodPlugin,
    options: config.get('good'),
  },
  vision,
  inert,
  {
    plugin: hapiSwagger,
    options: {
      debug: true,
      grouping: 'tags',
      info: {
        title: 'API auto-generated docs',
        version,
      },
    },
  },
];

module.exports = plugins;
