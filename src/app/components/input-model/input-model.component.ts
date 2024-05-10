import { Component, EventEmitter, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-input-model',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputModelComponent),
      multi: true
    }
  ],
  templateUrl: './input-model.component.html',
  styleUrl: './input-model.component.scss'
})
export class InputModelComponent implements ControlValueAccessor {



  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)

  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  registerOnTouched(fn: any): void {
     this.onTouched = fn;
  }

}
