import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() choices: string[];

  constructor() { }

  ngOnInit() {
  }

  isAdvancedJql() {
    return this.group.get('project').value === 'User Defined';
  }

}
