import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Product } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ChartService implements OnInit {

  private readonly cartAPI = "http://localhost:3000/cart"
  cartList: Product[] = []

  constructor(private server: HttpClient) { }

  ngOnInit(): void {
  }

  showCartList(){
    this.getCartList().subscribe(
      data => this.cartList = data
    )
  }

  getCartList(){
    return this.server.get<Product[]>(`${this.cartAPI}`)
  }

  getItem(id: number){
    return this.server.get<Product>(`${this.cartAPI}/${id}`)
  }

  checkProduct(id: number):boolean {
    for(let product of this.cartList){
      if(product.id == id){
        return true
      }
    }
    return false
  }

  addItem(product: Product){
    if(this.cartList.includes(product) == false){
    this.server.post(`${this.cartAPI}`, product).subscribe(
      success => {
        console.log("Item successfully added!")
        this.getCartList()
      }
    )} else {
      this.updateItem(product)
    }
  }

  updateItem(product: Product){
    this.server.put<Product>(`${this.cartAPI}/${product.id}`, product).subscribe(
      data => {
        data.quantity = product.quantity
      }
    )
  }

  formatPrice(price: number): string{
    return price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
  }

  getTotal(): number{
    let total = 0;
    for(let product of this.cartList){
      total += (product.price * product.quantity)
    }
    return total
  }

  removeItem(id: number){
    this.server.delete(`${this.cartAPI}/${id}`).subscribe(
      success => {
        console.log("Item successffully removed!")
        this.showCartList()
      }
    )
  }

}
