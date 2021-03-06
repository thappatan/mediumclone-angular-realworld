import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { loginAction } from '../../store/actions/login.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'mc-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initialzeForms();
    this.initialzeValues();
  }

  initialzeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    console.log(this.isSubmitting$);
  }

  initialzeForms() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value, this.form.valid);
    const request: LoginRequestInterface = {
      user: this.form.value,
    };

    this.store.dispatch(loginAction({ request }));
  }
}
