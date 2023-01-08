import { Component, OnInit } from '@angular/core';
import {DataBaseService} from "../../share/data-base.service";
import {Product} from "../../share/models/product.model";
import {Router} from "@angular/router";
import {CartService} from "../cart/cart.service";
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public filterForm:FormGroup = new FormGroup({
    'search': new FormControl(''),
  })

  public products: Product[] = [];
  public category:string[]=[];
  public slicer:number = 0;
  public page:number = 0;
  
  constructor(
    public dialog:MatDialog,
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


  public addToCart(product: Product): void {
    this.router.navigate(['/cart']);
    this.cartService.addCartLine(product);
  }

  public adminLogin():void{
    const dialogRef = this.dialog.open(AuthComponent, {width:'500px'});
    
  }

  public searching(){
    if(this.filterForm.value.search === ''){
      this.getAll();
    }else{
      
      this.products = this.products.filter((product)=>product.name.search(this.filterForm.value.search) != -1)
      
    }
   
  }
}
