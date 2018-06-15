import { getRepository } from 'typeorm';
import { User } from '../../../entity/user';
import { ObjectID } from 'mongodb';

export async function getUser(id: string): Promise<User[]> {
    try {
        const result: User[] = await getRepository(User).find({ _id: new ObjectID(id) });
        return result;
    } catch (e) {
        throw new Error(e.message);
    }
}
