import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective implements OnInit {
  @Input ('appResaltado') colorResaltado!: string;
  constructor(private elemeto: ElementRef) 
  {
    
  }
  ngOnInit(): void {
    this.elemeto.nativeElement.style.backgroundColor = this.colorResaltado;
  }
}
