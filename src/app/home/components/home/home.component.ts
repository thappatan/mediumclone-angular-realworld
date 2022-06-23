import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutAction } from 'src/app/auth/store/actions/login.action';

@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private store: Store) {}

  onLogout(): void {
    console.log('logout');
    this.store.dispatch(logoutAction());
  }
}
