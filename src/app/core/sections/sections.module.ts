import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlassianSectionComponent } from './atlassian-section/atlassian-section.component';
import { SharedModule } from '../../shared/shared.module';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportSectionComponent } from './report-section/report-section.component';
import { GoogleSectionComponent } from './google-section/google-section.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
  ],
  declarations: [
    AtlassianSectionComponent, 
    ReportSectionComponent,
    GoogleSectionComponent,
  ],
  exports: [
    AtlassianSectionComponent,
    ReportSectionComponent,
    GoogleSectionComponent
  ]
})
export class SectionsModule { }
