import { getRepository, DeleteResult } from 'typeorm';
import { User } from '../../../entity/user';
import { ObjectID } from 'mongodb';

export async function deleteUser(id: string): Promise<DeleteResult> {
    try {
        return getRepository(User).delete({ _id: new ObjectID(id) });
    } catch (e) {
        throw new Error(e.message);
    }
}
