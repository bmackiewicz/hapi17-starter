import { Request, ResponseToolkit, ResponseObject } from 'hapi';
import { getUser } from '../../../domains/users/functions/getUser';

export async function getUserHandler(request: Request, h: ResponseToolkit): Promise<ResponseObject> {

    try {
        return h.response(await getUser(request.params.id));
    } catch (e) {
        throw e;
    }
}
