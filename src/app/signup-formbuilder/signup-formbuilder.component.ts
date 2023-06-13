import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { passwordValidator,ageShouldGreaterThan18, gmailValidator} from '../custom-validator/custom-validator.component';

@Component({
  selector: 'app-signup-formbuilder',
  templateUrl: './signup-formbuilder.component.html',
  styleUrls: ['./signup-formbuilder.component.css']
})
export class SignupFormbuilderComponent {
  signUpForm!:FormGroup;
  
 constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.createSignUpForm();
    //on password change recalcuate the confirm password validations
    this.signUpForm.get('password')?.valueChanges.subscribe((el:any)=>{
      this.signUpForm.get('confirmPassword')?.updateValueAndValidity();
    })
  }

  createSignUpForm(){
    this.signUpForm = this.fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required,passwordValidator]],
      age:['',[Validators.required,ageShouldGreaterThan18]],
      email: ['', [Validators.required,Validators.email, gmailValidator]]
      // return this.optional(element) || /^[a-z0-9](\.?[a-z0-9]){3,}@[Gg][Mm][Aa][Ii][Ll]\.com$/i.test(value); 
    })
  }
  
  signUp(){
    console.log(this.signUpForm.value);
  }
get confirmPassword(){
    return this.signUpForm.get("confirmPassword");
  }
  get age(){
    return this.signUpForm.get("age");
  }
  get email(){
    return this.signUpForm.controls['email'];
  }
}



