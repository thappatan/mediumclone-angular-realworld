import { createAction, props } from '@ngrx/store';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RegisterActionTypes } from '../actionTypes';

export const registerAction = createAction(
  RegisterActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  RegisterActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);


export const registerFailureAction = createAction(
  RegisterActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorInterface}>()
);
