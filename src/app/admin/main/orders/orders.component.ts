import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/share/data-base.service';
import { Order } from 'src/app/share/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders:Order[]=[];
  constructor(private dataBaseService:DataBaseService) { }

  ngOnInit(): void {
    this.dataBaseService.getOrders().subscribe((res)=>{
      this.orders = res;
    })
  }

}
