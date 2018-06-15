import { Request, ResponseToolkit, ResponseObject } from 'hapi';
import { deleteUser } from '../../../domains/users/functions/deleteUser';

export async function deleteUserHandler(request: Request, h: ResponseToolkit): Promise<ResponseObject> {

    try {
        return h.response(await deleteUser(request.params.id));
    } catch (e) {
        throw e;
    }
}
