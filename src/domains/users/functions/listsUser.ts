import { getRepository } from 'typeorm';
import { User } from '../../../entity/user';

export async function listsUser(): Promise<User[]> {
    try {
        return getRepository(User).find();
    } catch (e) {
        throw new Error(e.message);
    }
}
