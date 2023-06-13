import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-reactive-formbuilder',
  templateUrl: './product-reactive-formbuilder.component.html',
  styleUrls: ['./product-reactive-formbuilder.component.css']
})
export class ProductReactiveFormbuilderComponent implements OnInit {
  productform!: FormGroup;
  categoryarr:string[]=[];
  pnamearr:string[]=[];
 productobj:product=new product();
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.productstructure();
    this.categoryarr=Object.keys(this.categoryobj)

    this.productform.get('category')?.valueChanges.subscribe((el)=>{
      console.log(this.productform.get('category')?.value);

      this.pnamearr=this.categoryobj[this.productform.get('category')?.value];
      console.log(this.pnamearr)
    })
    this.productform.get('price')?.valueChanges.subscribe((el) => {
      // let price1=this.productform.get('price')?.value;
      this.gettotal();
    });
    this.productform.get('quantity')?.valueChanges.subscribe((el) => {
      // let quant=this.productform.get('quantity')?.value;
      this.gettotal();
    });
  }

  gettotal() {

    const price = this.productform.get('price')?.value;
    const quantity = this.productform.get('quantity')?.value;

    const total = price * quantity;
    this.productform.get('total')?.setValue(total);

  }

  categoryobj:any={
    cloths:['shirts','pants','shorts'],
    electronics:['mobile',"tv",'frize','AC'],
    grocery:['Tea','milk','rice']
  }
  save(){
    console.log('form value',this.productform.value)
  }

  productstructure(){
    this.productform=this.fb.group({
      category:['',[]],
      pname:['',[]],
      price:['',[]],
      quantity:['',[]],
      total:['',[]]
})
}
// getpname(){
//   this.pnamearr=this.categoryobj[this.productobj.category]
// }
}
class product{
  category!:string;
  pname!:string;
  price!:number;
  quantity!:number;
  total!:number;
}