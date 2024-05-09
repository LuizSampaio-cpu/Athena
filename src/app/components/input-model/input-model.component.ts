import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-input-model',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input-model.component.html',
  styleUrl: './input-model.component.scss'
})
export class InputModelComponent {
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";

}
