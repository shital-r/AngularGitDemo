import { Component } from '@angular/core';

@Component({
  selector: 'app-product-driven-form',
  templateUrl: './product-driven-form.component.html',
  styleUrls: ['./product-driven-form.component.css']
})
export class ProductDrivenFormComponent {

  
  productform: product = new product();


getdata(){
  let obj = {
    category:'Grocery',
    pname : "Tea",
    price : 25,
    quantity : 4,
    total: 0
  }
  
  this.productform = obj;
  obj.total=obj.price *obj.quantity;
}

gettotal(){
  this.productform.total=this.productform.price*this.productform.quantity;
  console.log(this.productform.total);
  console.log(this.productform);
}

  reset(){
    this.productform = new product();
  }
}
class product{
  category! : string;
  pname! : string;
  price! : any;
  quantity:number=0;
  total :any=0;

}

