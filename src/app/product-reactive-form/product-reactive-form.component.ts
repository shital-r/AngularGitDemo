import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-reactive-form',
  templateUrl: './product-reactive-form.component.html',
  styleUrls: ['./product-reactive-form.component.css']
})
export class ProductReactiveFormComponent implements OnInit {

  productform!: FormGroup;

  constructor() {

  }
  ngOnInit(): void {
    this.createproductform();
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

  createproductform() {
    this.productform = new FormGroup({
      category: new FormControl('', [Validators.required]),
      pname: new FormControl('', []),
      price: new FormControl('', []),
      quantity: new FormControl("", []),
      total: new FormControl('', [])
    })
  }


  save() {
    console.log('form data', this.productform.value);
  }

  getdata() {
    let responseobj = {
      category: 'Electronics',
      pname: 'Mobile',
      price: 20000,
      quantity: 2,
      total: 0
    }
    responseobj.total = responseobj.price * responseobj.quantity;
    this.productform.setValue(responseobj);
    // console.log(productobj.total)
  }
reset() {
    this.productform.reset();
  }
}