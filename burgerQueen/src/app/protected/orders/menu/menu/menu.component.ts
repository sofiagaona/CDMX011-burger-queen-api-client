import { Component} from '@angular/core';
import { OrdersService } from '../../../services/orders.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  

  constructor( private serviceOrders:OrdersService) { }
  get menu(){
     return this.serviceOrders.productsMenu
   }

  

}
