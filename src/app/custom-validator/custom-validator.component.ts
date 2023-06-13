import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors } from "@angular/forms";


@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent {
}
  export function passwordValidator(control:AbstractControl):ValidationErrors| null{
    //logic
    const confirmPassword = control.value ;
    const password = control.root.get('password')?.value ;   
    console.log(password,confirmPassword);
    if(confirmPassword != "" && (password != confirmPassword)){
        return {"passwordMismatch":true};
    }else {
        return null ;
    }
   
}

export function ageShouldGreaterThan18(control:AbstractControl) :ValidationErrors | null {
    const age = control.value ;
     if(age && age < 18){
        return {"ageNotMatch":true}
     }else {
        return null ;
     }
}

// export function emailDomainValidator(domainName: string): ValidationErrors | null {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const email: string = control.value;
// let x=email.lastIndexOf('@');
// let y=email.lastIndexOf('.');
// const domain=email.slice(x,y);
// if(email=='' && domain!=='gmail'){
//   return{'emailvalid':true}
// }else{
//   return null;
// }
//   }
// }
    // const domain = email.substring(email.lastIndexOf('@') + 1);
//     if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
//       return null;
//     } else {
//       return { 'emailDomain': true };
//     }
//   };
// }
export function gmailValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const email = control.value;
  if (email && email.indexOf('@') > -1) {
    const domain = email.split('@');
    console.log(domain);
    if (domain !== 'gmail.com') {
      return { 'gmail': true };
    }
  }
  return null;
}

