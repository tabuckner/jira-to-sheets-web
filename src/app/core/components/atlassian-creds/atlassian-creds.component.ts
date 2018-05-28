import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atlassian-creds',
  templateUrl: './atlassian-creds.component.html',
  styleUrls: ['./atlassian-creds.component.css']
})
export class AtlassianCredsComponent implements OnInit {
  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
