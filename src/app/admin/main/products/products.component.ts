import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/share/data-base.service';
import { Product } from 'src/app/share/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';
import { DialogExitComponent } from '../dialog-exit/dialog-exit.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public displayedColumns = ['id', 'name', 'category', 'price', 'actions']
  public products:Product[]=[];
  public isLoading:boolean = true;
  constructor(
    private dataService:DataBaseService,
    private dialog:MatDialog,
    private notifier: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.updateData();
  }

  public edit(product:Product):void{
    const dialogRef=this.dialog.open(ProductFormComponent, {
      width:'500px',
      data: product
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.updateData();
      }
    });
  }
  public delete(id:number):void{
    const dialogRef=this.dialog.open(DialogExitComponent, {
      width:'500px',
    });
    dialogRef.afterClosed().subscribe((answer:boolean)=>{
      if(answer){
        this.dataService.deleteProduct(id).subscribe(()=>{
          this.updateData();
          this.notifier.open(`Product was deleted`, 'X',{
            duration: 3000
          });
     });
    }
    })

  }

  public create():void{
    const dialogRef=this.dialog.open(ProductFormComponent, {width:'500px'});
    dialogRef.afterClosed().subscribe((res)=>{
      if (res){
        this.products = [...this.products, res]
      }
    })
  }

  public addCategory():void{
    const dialogRef=this.dialog.open(CategoryFormComponent, {width:'500px'});
    
  }

  private updateData():void{
    this.isLoading = true;
    this.dataService.getProducts().subscribe((res:Product[]) => {
      this.products = res;
      this.isLoading = false;
    })
  }

}
