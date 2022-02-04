import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreComponent} from "./store/store.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  {
    path: 'store', component: StoreComponent,
  },
  {
    path: 'cart', component: CartComponent,
  },
  {
    path: 'checkout', component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
