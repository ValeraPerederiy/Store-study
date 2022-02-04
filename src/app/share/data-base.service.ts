import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./models/product.model";
import {Order} from "./models/order.model";

@Injectable()
export class DataBaseService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public addOrder(order: Order): Observable<any> {
    return this.http.post('http://localhost:3000/orders', order)
  }
}
