import { Component } from '@angular/core';

@Component({
  selector: 'app-retrivetable',
  templateUrl: './retrivetable.component.html',
  styleUrls: ['./retrivetable.component.css']
})
export class RetrivetableComponent {
  tabledisplay=false;

  employeelist:any[]=[
    {id:1,name:'John',mobileno:9895989588},
    {id:2,name:'mike',mobileno:9895989895},
    {id:3,name:'Tom',mobileno:9895989788},

  ]

  showTable(){
    this.tabledisplay=true;
  }

  back(){
    this.tabledisplay=false;
  }
}
