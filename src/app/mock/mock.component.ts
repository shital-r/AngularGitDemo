import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent {
  signUpForm! : FormGroup

  constructor(){

  }
  ngOnInit(): void {
    this.createRegistrationForm();
   // this.createRegistrationFormWithBuilder();
  }
  createRegistrationForm(){
     this.signUpForm = new FormGroup({
       "firstName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("[a-zA-Z]{2,10}")]),
       "lastName":new FormControl('',[Validators.minLength(2),Validators.maxLength(10)]),
       "mobileNo":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       "gender":new FormControl('',[]),
       "email":new FormControl('',[]),
      
      })
  }
save(){
    console.log("form data",this.signUpForm.value);
  }

  get firstName(){
   // this.signUpForm.get('firstName');
    return this.signUpForm.controls['firstName'];
  }

  get mobileNo(){
    return this.signUpForm.get("mobileNo");
  }
}
