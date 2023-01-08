import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ShareModule} from "../share/share.module";
import {CartService} from "./cart/cart.service";
import {ReactiveFormsModule} from "@angular/forms";
import { AuthComponent } from './auth/auth.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    StoreComponent,
    CartComponent,
    CheckoutComponent,
    AuthComponent
  ],
  providers: [
    CartService
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ShareModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class StoreModule { }
