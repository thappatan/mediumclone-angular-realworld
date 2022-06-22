import { createAction, props } from '@ngrx/store';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { LoginActionType } from '../actionTypes';

export const loginAction = createAction(
  LoginActionType.LOGIN,
  props<{ request: LoginRequestInterface }>()
);
