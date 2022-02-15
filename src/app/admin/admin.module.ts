import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { ProductFormComponent } from './main/product-form/product-form.component';
import { OrdersComponent } from './main/orders/orders.component';
import { HeaderComponent } from '../share/header/header.component';
import { ShareModule } from '../share/share.module';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogExitComponent } from './main/dialog-exit/dialog-exit.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { CategoryFormComponent } from './main/category-form/category-form.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    MainComponent,
    ProductsComponent,
    ProductFormComponent,
    OrdersComponent,
    DialogExitComponent,
    CategoryFormComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    MatIconModule

  ]
})
export class AdminModule { }
