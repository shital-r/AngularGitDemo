import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-formbuilder',
  templateUrl: './reactive-form-formbuilder.component.html',
  styleUrls: ['./reactive-form-formbuilder.component.css']
})
export class ReactiveFormFormbuilderComponent implements OnInit {
  registrationForm!:FormGroup;

  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.createformstructure();
  }
createformstructure(){
  this.registrationForm = this.fb.group({
firstName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('[a-zA-Z]{2,10}')]],
lastName: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
mobileno :['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
gender :['',[]],
email :['',[]],
address:this.fb.group({
  line1:['',[]],
  line2:['',[]],
  city:['',[]],
  state:['',[]]
})

  })
}
save(){
  console.log('form value',this.registrationForm.value)
}
get firstName(){
  return this.registrationForm.controls["firstName"];
  }
  get mobileno(){
    return this.registrationForm.controls["mobileno"];
  }

  getdata(){
    let responseobj= {
      firstName :"John",
      lastName : 'Johnson',
      mobileno :7898959895,
      gender : 'male',
      email : "test@gmail.com",
      address:{
        line1:'Line1',
        line2:"Line2",
        city:'pune',
        state:'MH'
      }
    }
this.registrationForm.setValue(responseobj);
}
resetData(){
  this.registrationForm.reset();
}
setmobileno(){
  this.registrationForm.get("mobileno")?.setValue(9090989598)
}
  }

