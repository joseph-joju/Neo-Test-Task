import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
    selector: '[mouseHover]'
})

export class MouseHoverDirective {
    @Input() mouseHover='';

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.mouseHover);
      }
      
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
      }
      highlight(color:string){
        this.eleRef.nativeElement.style.backgroundColor = color
      }
    constructor(private eleRef: ElementRef) {
        // this.eleRef.nativeElement.style.backgroundColor = 'yellow';
    }
}
