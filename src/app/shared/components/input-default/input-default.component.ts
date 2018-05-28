import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.css']
})
export class InputDefaultComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() control: FormControlName;
  @Input() type: string = 'text';
  @Input() text: string;
  @Input() hint: string;
  @Input() defaultValue: string;

  constructor() { }

  ngOnInit() {
  }

  isDefaultValue() {
    return this.defaultValue && this.group.get(`${this.control}`).value === this.defaultValue;
  }

}
