import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/share/models/product.model';
import { DataBaseService } from 'src/app/share/data-base.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  public productForm:FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
    'description': new FormControl('', Validators.required),
    'price': new FormControl('', Validators.required),
  })
  constructor(
    public dialogRef:MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public product:Product,
    private dataService:DataBaseService,
    private notifier: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.isEditMode() ) {
      this.productForm.patchValue(this.product);
    }
  }

  public cancel():void{
    this.dialogRef.close(null);
  }

  public complete():void{
  if(this.isEditMode()){
    const updateProduct= new Product(
      this.productForm.value.name,
      this.productForm.value.description,
      this.productForm.value.price,
      this.productForm.value.category,
      this.product.id,
    );
    
    this.dataService.updateProducts(updateProduct).subscribe((product:Product)=>{
      this.notifier.open(`Product - ${this.productForm.value.name} update sucsessfuly!`, 'X',{
        duration: 3000
      });
      this.dialogRef.close(product);
    });
  }else{
    this.dataService.addProducts(this.productForm.value).subscribe((product:Product)=>{
      this.notifier.open(`Product - ${this.productForm.value.name} added sucsessfuly`, 'X',{
        duration: 3000
      });
      this.dialogRef.close(product);
    })
   

  }

    
    
  }


  public isEditMode():boolean {
    return !!this.product;
  }

}
