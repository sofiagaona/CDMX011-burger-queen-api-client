import { Component, Input } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
 
  base:number=1;
  suma:number=0;
  @Input()precio:number=0;
  @Input()nombreProduct:string="";
  @Input()id:string="";

subtotal(cantidad:number, precio:number):number{
  return cantidad * precio}


   contador(base:number){
      this.suma+=base
      if(this.suma>=0){
        this.subtotal(this.suma, this.precio)
         this.orderService.addComanda(this.precio, this.nombreProduct, this.id, this.suma, this.subtotal(this.suma, this.precio))
      }
      //localStorage.setItem('contador',this.suma.toString());
      
  }

  constructor(private orderService:OrdersService) {
    
   }



}
