import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import { Comanda } from '../../interfaces/interfaces.orders';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
  }
  get comanda(){
     return this.orderService.comanda
  }
 get toPay(){
    return this.orderService.toPay
  }
}
