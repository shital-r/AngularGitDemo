import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-practice',
  templateUrl: './reactive-practice.component.html',
  styleUrls: ['./reactive-practice.component.css']
})
export class ReactivePracticeComponent implements OnInit {
  loginform!: FormGroup;
  ngOnInit(): void {
    this.createloginform();
  }
  createloginform() {
    this.loginform = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[A-Z][a-z]{3,10}')]),
      lastname: new FormControl('', [Validators.required]),
      mobileno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required]),

    })

  }
  save() {
    console.log('form data', this.loginform.value);
  }

  get firstname(){
    return this.loginform.controls["firstname"];
  }

  get mobileno(){
    return this.loginform.controls["mobileno"];
  }
  get email(){
    return this.loginform.controls["email"];
  }
}
