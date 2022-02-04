import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { ProductFormComponent } from './main/product-form/product-form.component';
import { OrdersComponent } from './main/orders/orders.component';


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    MainComponent,
    ProductsComponent,
    ProductFormComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
