const version = require('../package.json').version;

module.exports = {
  environment: 'staging',
  good: {
    ops: {
      interval: 1000,
    },
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }],
      }, {
        module: 'good-console',
      }, 'stdout',
      ],
    },
  },
  server: {
    port: 8093,
    host: '0.0.0.0',
  }
};
