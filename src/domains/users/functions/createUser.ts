import { getRepository } from 'typeorm';
import { User } from '../../../entity/user';

export async function createUser(data: User): Promise<User> {
    try {
        const result: User = await getRepository(User).save(data);
        return result;
    } catch (e) {
        throw new Error(e.message);
    }
}
