import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Product} from "./models/product.model";
import {Order} from "./models/order.model";

@Injectable()
export class DataBaseService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
    
  }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  public addProducts(product:Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  public addOrder(order: Order): Observable<any> {
    return this.http.post('http://localhost:3000/orders', order)
  }

  public updateProducts(product:Product):Observable<Product> {
    return this.http.put<Product>('http://localhost:3000/products/' + product.id ,product)
  }

  public deleteProduct(id:number):Observable<Product> {
    return this.http.delete<Product>('http://localhost:3000/products/' + id)
  }

  public getCategoryes():Observable<string[]>{
    return this.http.get<string[]>('http://localhost:3000/categoryes')
  }

  public addCategory(category:string):Observable<string>{
    return this.http.post<string>('http://localhost:3000/categoryes', category)
  }

}
