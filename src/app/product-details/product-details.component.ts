import { ProductService } from 'src/app/product-list/product.service';
import { Product } from './../interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartService } from '../chart/chart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number = 0
  product: Product = {id: 0, name: "", category: "", price: 0, quantity: 0, imageURL: ""};

  constructor(private route: ActivatedRoute, private server: ProductService, private chartServer: ChartService) { 
    this.id = this.route.snapshot.params['id']
  }

  isOnCart(): boolean{
    return this.chartServer.checkProduct(this.id)
  }

  showQty = ():number => this.product.quantity

  increaseQty(): void{
    this.product.quantity += 1
  }

  decreaseQty(): void {
    this.product.quantity > 1 ? this.product.quantity -= 1 : this.product.quantity = 1
  }

  ngOnInit(): void {
    this.server.getProductByID(this.id).subscribe(
      data => {
        data.quantity = 1
        this.product = data
      }
    )
    this.chartServer.checkProduct(this.id)
  }

  add(){
    this.chartServer.addItem(this.product)
  }

}
