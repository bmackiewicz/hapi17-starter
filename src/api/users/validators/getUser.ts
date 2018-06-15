import { string } from 'joi';
import { RouteOptionsValidate } from 'hapi';

export const getUserValidate: RouteOptionsValidate = {
    params: {
      id: string().min(1).required(),
    },
  };
