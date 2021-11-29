import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddedToChart]'
})
export class AddedToChartDirective implements OnInit {

  constructor(private elementRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){

  }
  
}
