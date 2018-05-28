import { Directive, ElementRef, Renderer, ViewChild, AfterViewInit } from '@angular/core';
import { MatError } from '@angular/material';

@Directive({
  selector: '[appShowRequiredError]'
})
export class ShowRequiredErrorDirective implements AfterViewInit {
  @ViewChild(MatError) error: MatError; // TODO: Fix this???

  constructor(el: ElementRef, renderer: Renderer) { }

  ngAfterViewInit() {
    console.log(this.error);
  }
  
}
