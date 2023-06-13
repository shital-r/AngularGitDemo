import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-template-form',
  templateUrl: './registration-template-form.component.html',
  styleUrls: ['./registration-template-form.component.css']
})
export class RegistrationTemplateFormComponent {

  save(data:any){
    console.log('form value',data.value);
  }
}
