import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() choices: string[];
  @Input() control: FormControlName;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
