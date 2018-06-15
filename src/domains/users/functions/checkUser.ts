import { User } from '../../../entity/user';
import { get } from 'config';
import { createToken } from '../../../auth/helpers/jwt-create-token';

export async function checkUser(data: User): Promise<string> {
    try {
        if (data.username === get('defaultUser.username') && data.password === get('defaultUser.password')) {
            return createToken(get('defaultUser.username'), 'user');
        }
        return '';
    } catch (e) {
        throw new Error(e.message);
    }
}
