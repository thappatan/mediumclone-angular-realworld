import { createAction, props } from '@ngrx/store';

import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { LoginActionType } from '../actionTypes';

export const loginAction = createAction(
  LoginActionType.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  LoginActionType.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  LoginActionType.LOGIN_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);
