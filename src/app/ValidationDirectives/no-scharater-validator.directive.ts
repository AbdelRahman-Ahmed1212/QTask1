import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';
import { Validator, NgModel } from '../../../node_modules/@angular/forms';


@Directive({
  selector: '[appNoSCharaterValidator]',
  standalone: true
})
export class NoSCharaterValidatorDirective{
  constructor(private control: ElementRef) {}
  // class bindings
  @HostListener('input') updateValidty(){
    if(this.control.nativeElement.validity.valid){
      (this.control.nativeElement as HTMLInputElement).style.backgroundColor = 'green'
    }else{
      (this.control.nativeElement as HTMLInputElement).style.backgroundColor = 'red'
    }
    console.log(this.control.nativeElement.validity)
  }


}
