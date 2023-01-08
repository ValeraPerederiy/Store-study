import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import {MainComponent} from "./main/main.component";
import {ProductsComponent} from "./main/products/products.component";
import {ProductFormComponent} from "./main/product-form/product-form.component";
import {OrdersComponent} from "./main/orders/orders.component";
import { AuthGuard } from '../share/Auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'main'
      },
      
      {
        path: 'main',
        component: MainComponent,
        children: [
          {
            path: '', pathMatch: 'full', redirectTo: 'products'
          },
          {
            path: 'products',
            component: ProductsComponent
          },
          {
            path: 'products/create',
            component: ProductFormComponent
          },
          {
            path: 'products/edit/:id',
            component: ProductFormComponent
          },
          {
            path: 'orders',
            component: OrdersComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AdminRoutingModule { }
