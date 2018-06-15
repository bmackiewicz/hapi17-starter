import { Request, ResponseToolkit, ResponseObject } from 'hapi';
import { listsUser } from '../../../domains/users/functions/listsUser';

export async function listsUsersHandler(_request: Request, h: ResponseToolkit): Promise<ResponseObject> {

    try {
        return h.response(await listsUser()).code(201);
    } catch (e) {
        throw e;
    }
}
