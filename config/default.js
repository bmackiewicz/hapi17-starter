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
  },
  typeorm: {
    mongodb: {
      type: 'mongodb',
      host: '',
      port: 27027,
      username: '',
      password: '',
      database: '',
      authSource: '',
      ssl: false,
      sslValidate: false,
      synchronize: false,
    },
  },
  authentication: {
    secret: 'xIUIrxc8cYjnkQKYWzZyj8qUCTsUx1Rb', // not used, use local.js
    expiresIn: '15 days',
    ResetPasswordTokenLifetime: 1,
  }
};
