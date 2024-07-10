import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule,ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common' 
import {NoSCharaterValidatorDirective} from './ValidationDirectives/no-scharater-validator.directive';
@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule,NoSCharaterValidatorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  myFormGroup = new FormGroup({
    firstInput:new FormControl(
      '',[Validators.pattern(/^[a-zA-Z0-9 ]*$/)]
    ),
    secondInput:new FormControl(
      '',[Validators.pattern(/^[^0-9]*$/)]
    ),
    thirdInput:new FormControl(
    '',[Validators.pattern(/^[^\u0600-\u06FF\u0750-\u077F]*$/)]
    )
  })


}
