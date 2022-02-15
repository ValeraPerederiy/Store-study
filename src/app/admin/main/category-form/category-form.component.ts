import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataBaseService } from 'src/app/share/data-base.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  public categoryes:string[]=[];
  public value:string="Place new category"
  constructor(
    private dataService:DataBaseService,
    public dialogRef:MatDialogRef<CategoryFormComponent>,
  
  ) { }

  ngOnInit(): void {
    this.dataService.getCategoryes().subscribe((res:string[])=>{
      this.categoryes = res;
    })
  }

  public complete():void{
    this.dataService.addCategory(this.value)
    this.dialogRef.close(true)
  }

}
