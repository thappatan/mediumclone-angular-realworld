import { createAction, props } from '@ngrx/store';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { AuthActionType } from '../actionTypes';

export const registerAction = createAction(
  AuthActionType.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  AuthActionType.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);


export const registerFailureAction = createAction(
  AuthActionType.REGISTER_FAILURE,
  props<{errors: BackendErrorInterface}>()
);
