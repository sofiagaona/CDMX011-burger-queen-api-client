import { Component} from '@angular/core';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
 
  base:number=1
  suma:number=0

   contador(base:number){
      this.suma+=base
      this.orderService.contador=this.suma
  }

  constructor(private orderService:OrdersService) { }



}
