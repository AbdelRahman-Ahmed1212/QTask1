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


  myFormGroup = new FormGroup({
    firstInput:new FormControl(
      '',Validators.pattern(/^[a-zA-Z0-9 ]*$/)
    ),
    secondInput:new FormControl(
      '',Validators.pattern(/^[^0-9]*$/)
    ),
    thirdInput:new FormControl(
    '',Validators.pattern(/^[^\u0600-\u06FF\u0750-\u077F]*$/)
    )
  })


}
