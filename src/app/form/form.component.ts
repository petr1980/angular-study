import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CheckboxListComponent} from "./checkbox-list/checkbox-list.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxListComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    form = new FormGroup({
      name:  new FormControl(''),
      list: new FormControl([2])
    })


  options = [
    {
      id: 1,
      name: 'Dad'
    },
    {
      id: 2,
      name: 'Mom'
    },
    {
      id:3,
      name: 'Granddad'
    }

  ]


  addListItem() {
      this.form.get('list')?.setValue([2,3])
  }
}


