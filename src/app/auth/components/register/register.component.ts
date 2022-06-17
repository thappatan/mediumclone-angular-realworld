import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;

  constructor(private fb: FormBuilder){}

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
  }
}
