import { getRepository, UpdateResult } from 'typeorm';
import { User } from '../../../entity/user';
import { ObjectID } from 'mongodb';

export async function updateUser(id: string, data: User): Promise<UpdateResult> {
    try {
        return getRepository(User).update({ _id: new ObjectID(id) }, data);
    } catch (e) {
        throw new Error(e.message);
    }
}
