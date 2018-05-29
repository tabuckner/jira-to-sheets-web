import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-section',
  templateUrl: './report-section.component.html',
  styleUrls: ['./report-section.component.css']
})
export class ReportSectionComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() questions: any;

  constructor() { }

  ngOnInit() {
  }
  
  isUpdateDemo() {
    return this.isDemoAction() && this.isUpdate();
  }

  isDemoAction() {
    return this.group.get('reportType').value === 'Demo Sheet' || this.group.get('reportType').value === 'Both';
  }

  isUpdate() {
    return this.group.get('demoReportAction').value === 'Update Existing Sheet(s)';
  }

}
