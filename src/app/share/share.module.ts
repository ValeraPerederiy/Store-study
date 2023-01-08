import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataBaseService} from "./data-base.service";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.sevice';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  providers: [
    DataBaseService,
    AuthService
  ],
  imports: [
  
  CommonModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class ShareModule { }
