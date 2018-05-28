import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule, MatDividerModule, MatExpansionModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './shared/components/project/project.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { InputDefaultComponent } from './shared/components/input-default/input-default.component';
import { ShowRequiredErrorDirective } from './shared/show-required-error.directive';
import { SharedModule } from './shared/shared.module';
import { AtlassianCredsComponent } from './core/components/atlassian-creds/atlassian-creds.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DropdownComponent,
    InputDefaultComponent,
    AtlassianCredsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
