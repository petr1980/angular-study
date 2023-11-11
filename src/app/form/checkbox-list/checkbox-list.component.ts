import {Component, forwardRef, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


export interface Options {
  id:   number
  name: string
}

@Component({
  selector: 'app-checkbox-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxListComponent),
    multi: true
  }]
})
export class CheckboxListComponent implements ControlValueAccessor{
  @Input() options: Options[] = [];

  get value() {
    return this._value;
  }

  @Input()
  set value(val) {
    this._value = [...val];
    this.onChange(this._value);
  }


  _value:  number[] = []

  onChange: Function = (list: []) =>{  };

  disabled: boolean =false

  writeValue(value: number[]): void {
    this._value = [...value]
  }
  registerOnChange(onChange: any) {
      this.onChange = onChange
  }
  registerOnTouched(fn: any) {

  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled

  }

  inputChange($event: Event, id: number) {
    const target = $event.target as HTMLInputElement
    const model = [...this._value];
    if (target.checked) {
      model.push(id);
    } else {
      const index = model.findIndex((e) => e === id);
      if (index !== -1) {
        model.splice(index, 1);
      }
    }

      this._value = model
      this.onChange(this._value)
  }


  checkSelected(id: number): boolean {
    return this._value.includes(id);
  }
}
