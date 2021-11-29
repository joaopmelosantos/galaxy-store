import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = 'http://localhost:3000/products'

  constructor(private server: HttpClient) { }

  getProducts(){
    return this.server.get<Product[]>(this.API)
  }
  
  getProductByID(id: number){
    return this.server.get<Product>(`${this.API}/${id}`)
  }
}
