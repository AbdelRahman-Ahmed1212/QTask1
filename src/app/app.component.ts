import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule,ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common' 
import { CLOSING } from '../../node_modules/@types/ws';
import { RegExpLiteral } from '../../node_modules/@types/estree';
@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  noneSpecials:any=/^[a-zA-Z0-9 ]*$/;
  Numbers:any = /^[0-9]*$/
  ArabicCodes:any = /[\u0600-\u06FF\u0750-\u077F]/
  res:boolean = true;

  inputOnePressed(e:Event){
    if(!this.noneSpecials.test((e as KeyboardEvent).key)){
        alert('Not valid Input special characters not allowed');
        e.preventDefault()
    }
  }
  inputTwoPressed(e:Event){
    if(this.Numbers.test((e as KeyboardEvent).key)){
      alert('Not valid Input Numbers not allowed');
      e.preventDefault()
  }
  }
  noArabicChars(e:Event){
    if(this.ArabicCodes.test((e as KeyboardEvent).key)){
      alert('Not valid Arabic characters not allowed');
      e.preventDefault()
  }
  }

}
