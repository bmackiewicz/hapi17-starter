import config = require('config');
import { validateToken } from '../helpers/jwt-validate-token';

module.exports = {
  key: config.get<string>('authentication.secret'),
  validate: validateToken,
  verifyOptions: {
    algorithms: ['HS256'],
  },
};
