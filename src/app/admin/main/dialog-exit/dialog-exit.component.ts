import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-exit',
  templateUrl: './dialog-exit.component.html',
  styleUrls: ['./dialog-exit.component.scss']
})
export class DialogExitComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogExitComponent>,) { }

  ngOnInit(): void {
  }

  public cancel():void{
    this.dialogRef.close(false);
  }

  public complete():void{
    this.dialogRef.close(true);
  }


}
