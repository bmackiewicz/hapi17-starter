import { Request, ResponseToolkit, ResponseObject } from 'hapi';
import { updateUser } from '../../../domains/users/functions/updateUser';
import { User } from '../../../entity/user';

export async function patchUserHandler(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const data: User = <User>request.payload;
    try {
        return h.response(await updateUser(request.params.id, data));
    } catch (e) {
        throw e;
    }
}
