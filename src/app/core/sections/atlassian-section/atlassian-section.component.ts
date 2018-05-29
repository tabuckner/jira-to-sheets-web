import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atlassian-section',
  templateUrl: './atlassian-section.component.html',
  styleUrls: ['./atlassian-section.component.css']
})
export class AtlassianSectionComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() projectChoices: string[];

  constructor() { }

  ngOnInit() {
  }

}
