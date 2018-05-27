import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myForm = new FormGroup({
    username: new FormControl(null, [ Validators.required ]), // TODO: Move these to their own group
    password: new FormControl(null, [ Validators.required ]),
    reportType: new FormControl(null, [ Validators.required ]),
    demoReportAction: new FormControl(null, [ Validators.required ]),
    project: new FormControl(null, [ Validators.required ]),
    projectKey: new FormControl(null, [ Validators.required ]),
    keyIndex: new FormControl('C', [ Validators.required ]),
    exceptions: new FormControl('H, I', [ Validators.required ]),
    demoSheet: new FormControl('Sheet1', [ Validators.required ]),
    planItPoker: new FormControl('Sheet2', [ Validators.required ]),
    sheetKey: new FormControl(null, [ Validators.required ]),
  });
  reportTypes: string[] = [
    'Demo Sheet',
    'PlanITPoker',
    'Both'
  ];
  demoSheetActions: string[] = [
    'Populate Blank Sheet(s)',
    'Update Existing Sheet(s)'
  ];
  projectChoices: string[] = [
    'RT',
    'CORE',
    'TBN', 
    'CORE & TBN',
    'User Defined'
  ];

  isDemoAction() {
    return this.myForm.get('reportType').value === 'Demo Sheet' || this.myForm.get('reportType').value === 'Both';
  }

  isPlanItPokerAction() {
    return this.myForm.get('reportType').value === 'PlanITPoker' || this.myForm.get('reportType').value === 'Both';
    
  }

  isAdvancedJql() {
    return this.myForm.get('project').value === 'User Defined';
  }

  isUpdate() {
    return this.myForm.get('demoReportAction').value === 'Update Existing Sheet(s)';
  }

  isUpdateDemo() {
    return this.isDemoAction() && this.isUpdate();
  }

  showRequiredError(field: string) {
    return this.myForm.get(field).touched && this.myForm.get(field).hasError('required');
  }
}
