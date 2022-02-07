import { Component, OnInit } from '@angular/core';
import {DataBaseService} from "../../share/data-base.service";
import {Product} from "../../share/models/product.model";
import {Router} from "@angular/router";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  public products: Product[] = [];
  public category:string[]=[];
  public slicer:number = 0;
  public page:number = 0;
  public startIndex:number=0;
  constructor(
    private dataBaseService: DataBaseService,
    private cartService: CartService,
    private router: Router
  ) { }

  public ngOnInit(): void {
 
      this.dataBaseService
      .getProducts()
      .subscribe((res:Product[]) => {
        this.products = res;
        this.slicer=this.products.length
        let unique = '';
        res.forEach((item)=>{
          
          if(unique!=item.category){
            this.category.push(item.category);
            unique = item.category;
          }
  
        })
      }); 
  }

  public getAll():void{
    this.dataBaseService
    .getProducts()
    .subscribe((products:Product[]) => {
      this.products = products;
    });
  }

  public getCategory(category:string):void{
    this.dataBaseService
    .getProducts()
    .subscribe((res:Product[]) => {
      this.products = res.filter((data)=>data.category===category);
     
    });
  }

  public goToPage(page:number):void{
    this.startIndex = this.slicer * (page - 1);
  }

  public addToCart(product: Product): void {
    this.router.navigate(['/cart']);
    this.cartService.addCartLine(product);
  }

}
