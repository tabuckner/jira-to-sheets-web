import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-google-section',
  templateUrl: './google-section.component.html',
  styleUrls: ['./google-section.component.css']
})
export class GoogleSectionComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() questions: any;

  constructor() { }

  ngOnInit() {
  }

  isDemoAction() {
    return this.group.get('reportType').value === 'Demo Sheet' || this.group.get('reportType').value === 'Both';
  }

  isPlanItPokerAction() {
    return this.group.get('reportType').value === 'PlanITPoker' || this.group.get('reportType').value === 'Both';
  }

}
