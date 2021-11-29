import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private service: ChartService) { }

  showCartList(){
    return this.service.cartList
  }

  formatPrice(price: number): string{
    return price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
  }

  checkCart(): boolean{
    if(this.showCartList().length > 0){
      return true
    }
    return false
  }
  
  getTotal(): number{
    return this.service.getTotal()
  }
  
  ngOnInit(): void {
    this.service.showCartList()
  }
}
