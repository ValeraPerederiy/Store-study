import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from './../../share/auth.sevice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authForm:FormGroup = new FormGroup({
    'login': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
  })
  constructor(
    public dialogRef:MatDialogRef<AuthComponent>,
    public authService:AuthService,
    public router:Router
    ) { }

  ngOnInit(): void {
  }

  public complete():void{
    this.authService.checkAuth(this.authForm.value.login, this.authForm.value.password)
    this.authService.returnAuthStatus().subscribe(res=>{
      if(res){
        this.router.navigate(['/admin/main'])
      }
    })
    this.dialogRef.close(true)
  }

  public cancel():void{
    this.dialogRef.close(null);
  }
}
