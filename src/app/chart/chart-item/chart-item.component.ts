import { Product } from './../../interface';
import { ChartService } from './../chart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrls: ['./chart-item.component.css']
})
export class ChartItemComponent implements OnInit{

  @Input() id: number = 0
  @Input() name: string = ""
  @Input() category: string = ""
  @Input() price: number = 0
  @Input() quantity: number = 0
  @Input() imageURL: string = ""

  product: Product = { id: 0, name: "", category: "", quantity: 0, price: 0, imageURL: "" };

  formatPrice(price: number): string{
    return price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
  }

  getProduct(){
    this.service.getItem(this.id).subscribe(
      data => this.product = data
    )
  }

  removeItem(){
    this.service.removeItem(this.id)
    this.service.showCartList()
  }

  increaseQty(){
    this.product.quantity += 1
    this.service.updateItem(this.product)
    this.service.showCartList()
  }

  decreaseQty(){
    if(this.product.quantity != 1){
      this.product.quantity -= 1
      this.service.updateItem(this.product)
      this.service.showCartList()
    } else {
      this.product.quantity = 1
    }
  }

  constructor(private service: ChartService) { }

  ngOnInit(): void {
    this.product = { 
      id: this.id, 
      name: this.name, 
      category: this.category, 
      quantity: this.quantity, 
      price: this.price, 
      imageURL: this.imageURL
    };
  }

}
