import { createAction, props } from '@ngrx/store';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthActionType } from '../actionTypes';

export const userAction = createAction(
  AuthActionType.USER
);

export const userSuccessAction = createAction(
  AuthActionType.USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const userFailureAction = createAction(
  AuthActionType.USER_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);
