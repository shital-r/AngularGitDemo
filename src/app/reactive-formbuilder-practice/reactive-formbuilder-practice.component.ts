import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-formbuilder-practice',
  templateUrl: './reactive-formbuilder-practice.component.html',
  styleUrls: ['./reactive-formbuilder-practice.component.css']
})
export class ReactiveFormbuilderPracticeComponent implements OnInit {

  loginform!:FormGroup;
  constructor(private fb:FormBuilder){
}

getdata(){
  let obj = {
    firstname : 'Sam',
    lastname : "Johnson",
    mobileno : 9895989598,
    email : 'test@gmail.com',
  }
  this.loginform.setValue(obj);
}
// setMobileNo(){
//   this.loginform.get("mobileno")?.setValue(9099090909)
// }
patchdata(){
  let responseobj = {
    firstname:"John",
    lastname: "johnson"
  }
  this.loginform.patchValue(responseobj);
}
  ngOnInit(): void {
    this.createloginform()
  }
  createloginform(){
    // use group method to create instance of FormGroup
    this.loginform = this.fb.group({
      firstname : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[A-Z][a-z]{3,10}')]],
lastname : ['',[Validators.required]],
mobileno : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
email : ['',[Validators.required]]

    })
  }

  save(){
    console.log('form data',this.loginform.value)
  }

// bind FormGroup with html element using formcontrol
get firstname(){
  return this.loginform.controls['firstname'];
}
get mobileno(){
  return this.loginform.controls['mobileno'];
}

get email(){
  return this.loginform.controls['email'];
}

}
