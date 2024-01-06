import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImg]',
  standalone: true
})
export class ImgDirective {
  
  constructor( private el:ElementRef) { }


}
