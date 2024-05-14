import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {

  @Input() btnText: string = ''
  @Output("submit") onSubmit = new EventEmitter();
  @Input() disableBtn: boolean = true;


  submit() {
    this.onSubmit.emit();
  }
}
