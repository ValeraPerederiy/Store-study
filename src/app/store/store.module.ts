import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ShareModule} from "../share/share.module";
import {CartService} from "./cart/cart.service";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StoreComponent,
    CartComponent,
    CheckoutComponent
  ],
  providers: [
    CartService
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class StoreModule { }
