import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataBaseService} from "../../share/data-base.service";
import {CartService} from "../cart/cart.service";
import {Order} from "../../share/models/order.model";
import { phoneValidator } from './phone-validator';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public orderForm: FormGroup;
  public thnx:boolean = false;
  constructor(
    private dataBaseService: DataBaseService,
    private cartService: CartService
  ) {
    this.orderForm = new FormGroup({
      'name': new FormControl('', 
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]),
      'phone': new FormControl('', 
      [
        Validators.required,
        phoneValidator
      ]),
      'address': new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  ngOnInit(): void {
    console.log(this.orderForm.controls['phone'].errors)
  }

  public submit(): void {
    this.thnx = true;
    const order = new Order(
      this.orderForm.value.name,
      this.orderForm.value.phone,
      this.orderForm.value.address,
      this.cartService.getCartLines()
    );

    this.dataBaseService.addOrder(order).subscribe((res) => {
      // ....
    });
  }

}
