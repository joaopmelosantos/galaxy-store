import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChartService } from './../chart/chart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(private route: Router ,private cart: ChartService) { }

  total: string = ""

  ngOnInit(): void {
    this.total = this.cart.formatPrice(this.cart.getTotal())
    this.form = new FormGroup({
      'firstname': new FormControl(null,[
        Validators.required
      ]),
      'lastname': new FormControl(null,[
        Validators.required
      ]),
      'email': new FormControl(null,[
        Validators.required
      ]),
      'phone': new FormControl(null,[
        Validators.required
      ]),
      'address': new FormControl(null,[
        Validators.required
      ])
    });
  }

  onSubmit(){
    if(this.form.valid){
    for(let product of this.cart.cartList){
      this.cart.removeItem(product.id)
    }
    this.cart.cartList = []
    window.alert("Purchase Completed!")
    this.route.navigate(['/'])
    } else{
      alert('Fill all the fields to complete the purchase!')
    }
  }

}
