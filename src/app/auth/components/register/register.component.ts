import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { registerAction } from '../../store/action';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store){}

  ngOnInit(): void {
    this.initialzeForm();
  }

  initialzeForm(): void{
    console.log('initialzeForm');
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  onSubmit() : void{
    console.log(this.form.value, this.form.valid);
    this.store.dispatch(registerAction(this.form.value));
  }
}
