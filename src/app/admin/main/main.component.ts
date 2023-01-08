import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../share/auth.sevice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public authService:AuthService,
    public router:Router
    ) { }

  ngOnInit(): void {
  }

  logOut():void{
    this.authService.logOut();
    this.router.navigate(["/store"])
  }

}
