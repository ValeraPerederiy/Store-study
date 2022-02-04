import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/store/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    public router:Router,
    public cartService:CartService
    ) { }

  ngOnInit(): void {
  }

  public goToCart():void{
    this.router.navigate(['/cart']);
  }

  public getProd():number{
    return this.cartService.getCartLines().length;
  }

  public getPrice():number{
    return this.cartService.getTotal();
  }

}
