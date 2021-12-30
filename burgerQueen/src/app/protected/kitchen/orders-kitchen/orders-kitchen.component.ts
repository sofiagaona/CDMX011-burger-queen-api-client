import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { KitchenService } from '../../services/kitchen.service';
import { Order } from '../../orders/interfaces/interfaces.orders';
import { catchError, map, tap, of } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-kitchen',
  templateUrl: './orders-kitchen.component.html',
  styleUrls: ['./orders-kitchen.component.css']
})
export class OrdersKitchenComponent implements OnInit {
  public _getOrders:Order[]=[];
 
  constructor(private orderKitchen:KitchenService) {
    this._getOrders=JSON.parse(localStorage.getItem('listOrder')!)||[];
   }

  ngOnInit(): void {
    this.orderKitchen.orders()
    .subscribe(resp=>{ 
      
      this._getOrders=resp;
      this.orderKitchen.Listorders(this._getOrders)
      localStorage.setItem('listOrder', JSON.stringify(this._getOrders))
      
    })
  }

 updateStatus(idOrder:string, status:string){
   this.orderKitchen.updateOrder(idOrder, status)
   .subscribe(resp=>{
     console.log(resp)
     console.log(status)
    if(resp===status){
      Swal.fire({
        title: 'OK!',
        text: `La orden esta ${status}`,
        confirmButtonText: 'OK'
      })
      this.ngOnInit();
      //localStorage.setItem('order',JSON.stringify(this.serviceOrders.) );
      
    }
    else{
    
      Swal.fire({
        title: 'Error!',
        text: resp,
        confirmButtonText: 'OK'
      })
    }
  })
 }

  

}
