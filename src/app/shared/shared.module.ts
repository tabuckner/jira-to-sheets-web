import { NgModule } from "@angular/core";
import { ShowRequiredErrorDirective } from "./show-required-error.directive";

@NgModule({
  declarations: [
    ShowRequiredErrorDirective,
  ],
  exports: [
    ShowRequiredErrorDirective,
  ]
})
export class SharedModule{}