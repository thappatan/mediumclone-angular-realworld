import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from 'src/app/auth/store/actions/login.action';
import { userAction } from 'src/app/auth/store/actions/user.action';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initialzeValues();
  }

  initialzeValues(): void {
    this.onUser();
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  onLogout(): void {
    this.store.dispatch(logoutAction());
  }

  onUser(): void {
    this.store.dispatch(userAction());
  }
}
