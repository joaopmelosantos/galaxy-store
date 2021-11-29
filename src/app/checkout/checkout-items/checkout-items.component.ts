import { Product } from './../../interface';
import { ChartService } from './../../chart/chart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-items',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.css']
})
export class CheckoutItemsComponent implements OnInit {

  constructor(private cart: ChartService) { }

  cartList: Product[] = []
  total: number = 0

  format(price: number){
    return this.cart.formatPrice(price)
  }

  ngOnInit(): void {
    this.cartList = this.cart.cartList
    this.total = this.cart.getTotal()
  }

}
