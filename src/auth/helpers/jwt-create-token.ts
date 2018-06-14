import { get } from 'config';
import { IJwtToken } from '../../interfaces/jwt-token';
import { sign } from 'jsonwebtoken';

const version: string = require('../../../package.json').version; // tslint:disable-line

function createToken(
  username: string,
  role: string,
): string {
  return sign(<IJwtToken>{
    user: { username, type: 'user', role },
    aud: '',
    iss: `api/${version}`,
  }, get<string>('authentication.secret'), {
    algorithm: 'HS256',
    expiresIn: get<string>('authentication.expiresIn'),
  });
}

export { createToken };
