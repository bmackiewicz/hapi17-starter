import { string } from 'joi';
import { RouteOptionsValidate } from 'hapi';

export const patchUserValidate: RouteOptionsValidate = {
    params: {
      id: string().min(1).required(),
    },
    payload: {
      username: string().min(1).required(),
      password: string().min(3).required(),
    },
  };
