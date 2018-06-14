import { get } from 'config';
import { IJwtToken } from '../../interfaces/jwt-token';
import { sign } from 'jsonwebtoken';

const version: string = require('../../../package.json').version; // tslint:disable-line

function createToken(
  userId: string,
  username: string,
  role: string,
): string {
  return sign(<IJwtToken>{
    user: { id: userId, username, role },
    aud: userId,
    iss: `api/${version}`,
  }, get<string>('authentication.secret'), {
    algorithm: 'HS256',
    expiresIn: get<string>('authentication.expiresIn'),
  });
}

export { createToken };
