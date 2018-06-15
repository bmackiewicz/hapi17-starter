import { Request, ResponseToolkit, ResponseObject } from 'hapi';
import { createUser } from '../../../domains/users/functions/createUser';
import { User } from '../../../entity/user';

export async function createUserHandler(request: Request, h: ResponseToolkit): Promise<ResponseObject> {

    try {
        const payload: User = <User>request.payload;
        await createUser(payload);
        return h.response().code(201);
    } catch (e) {
        throw e;
    }
}
