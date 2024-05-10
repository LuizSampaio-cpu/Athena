import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputModelComponent } from '../../components/input-model/input-model.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginLayoutComponent,
    ReactiveFormsModule,
    InputModelComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit(){
    console.log(this.loginForm.value)
  }
}
