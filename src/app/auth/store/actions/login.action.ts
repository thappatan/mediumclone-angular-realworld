import { createAction, props } from '@ngrx/store';

import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { AuthActionType } from '../actionTypes';

export const loginAction = createAction(
  AuthActionType.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  AuthActionType.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  AuthActionType.LOGIN_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);

export const logoutAction = createAction(AuthActionType.LOGOUT);
