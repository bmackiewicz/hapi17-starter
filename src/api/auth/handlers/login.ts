import { Request, ResponseToolkit, ResponseObject } from 'hapi';
import { checkUser } from '../../../domains/users/functions/checkUser';
import { User } from '../../../entity/user';

export async function loginHandler(request: Request, h: ResponseToolkit): Promise<ResponseObject> {

    try {
        const payload: User = <User>request.payload;
        const result: string = await checkUser(payload);
        if (result) {
            return h.response({
                token: result,
            }).code(201);
        }
        return h.response().code(403);
    } catch (e) {
        throw e;
    }
}
