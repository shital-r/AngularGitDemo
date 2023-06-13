import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-model',
  templateUrl: './template-driven-model.component.html',
  styleUrls: ['./template-driven-model.component.css']
})
export class TemplateDrivenModelComponent implements OnInit {

  ngOnInit(): void {
    this.states=Object.keys(this.stateobj);
  }

  signupobj:signup = new signup();

  states:string[]=[];
  cities:string[]=[];

  // constructor(){
  //   this.states=Object.keys(this.stateobj);
  // }

  stateobj:any={
    Maharashtra:['Pune','Mumbai'],
    MP:['Indor','Ujjain'],
    UP:['Ayodhya','Agra']
  }

  getcities(){
    console.log(this.signupobj.state);
    this.cities=this.stateobj[this.signupobj.state];
  }
  

getdata(){
  let obj = {
    fName : 'John',
    lName : 'Johnson',
    mobno :9898959895,
    email : 'john@gmail.com',
    pwd : 'John$123',
dob : '2020-12-05',
age:3,
state:'Maharshtra',
city:'Pune',
  }

  this.signupobj = obj;
}

agecalculate(){
  if(this.signupobj.dob){
var timeDiff=Math.abs(Date.now()-new Date(this.signupobj.dob).getTime());
this.signupobj.age=Math.floor(timeDiff/(1000*3600*24)/365.25);
  }
}


  save(form:any){
    console.log("form value",form.value);
  }
}
class signup{
  fName!: string;
  lName!:string;
  mobno!:number;
  email!:string;
  pwd!:any;
  dob!:string;
  age!:number;
  state!:any;
  city!:any;
}
