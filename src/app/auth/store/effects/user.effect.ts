import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import {
  userAction,
  userFailureAction,
  userSuccessAction,
} from '../actions/user.action';

@Injectable()
export class UserEffect {
  user$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction),
      switchMap(() => {
        return this.authService.user().pipe(
          map((currentUser: CurrentUserInterface) => {
            return userSuccessAction({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              userFailureAction({ errors: errorResponse.error?.errors })
            );
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
