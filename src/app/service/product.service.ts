import { Injectable } from '@angular/core';
import { data } from '../mock-data';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products = data;
  api = 'https://5e79b4b817314d00161333da.mockapi.io/'

  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{ // Lay danh sach san pham
      // return this.products;
      return this.http.get<Product[]>(`${this.api}/product`);
  }
  // getProduct(id){ // Chi tiet san pham
  //     return this.products.find(product => product.id == id);
  // }
  removeProduct(id){ // Xoa san pham
    return this.products.filter(product => product.id != id)
  }
  updateProduct(product){
    return this.products.map( item => item.id === product.id ? product : item);
  }
  addProduct(product){ // them san pham
    let newObj = { id: 6, ...product};
    this.products.push(product)
  }
  editProduct(){ // sua san pham

  }
}