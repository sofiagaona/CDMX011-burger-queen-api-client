import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-btn-menus',
  templateUrl: './btn-menus.component.html',
  styleUrls: ['./btn-menus.component.css']
})
export class BtnMenusComponent  {

  get historialMenu(){
    return this.ordersService.historialMenu
  }

  getProducts(query:string){
   
  this.ordersService.buscarMenu(query)
  //     .subscribe(resp=>{
  //       console.log(resp);
  //     })
  }

  constructor(private ordersService:OrdersService) { }

 

}
