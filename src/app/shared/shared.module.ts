import { NgModule } from "@angular/core";
import { ShowRequiredErrorDirective } from "./show-required-error.directive";
import { ProjectComponent } from "./components/project/project.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { InputDefaultComponent } from "./components/input-default/input-default.component";
import { AtlassianCredsComponent } from "../core/components/atlassian-creds/atlassian-creds.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatExpansionModule, MatIconModule } from "@angular/material";

@NgModule({
  declarations: [
    ShowRequiredErrorDirective,
    ProjectComponent,
    DropdownComponent,
    InputDefaultComponent,
    AtlassianCredsComponent,
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    ReactiveFormsModule,
    // MatButtonModule,
    // MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    // MatExpansionModule,
    // MatIconModule
  ],
  exports: [
    ShowRequiredErrorDirective,
    ProjectComponent,
    DropdownComponent,
    InputDefaultComponent,
    AtlassianCredsComponent,
  ]
})
export class SharedModule{}