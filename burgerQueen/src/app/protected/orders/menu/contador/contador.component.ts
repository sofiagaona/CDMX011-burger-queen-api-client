import { Component, Input } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
 
  base:number=1
  suma:number=0
  @Input()precio:number=0;
  @Input()nombreProduct:string="";
  @Input()id:string="";

//   @Input() comanda:Comanda ={
//     qty:0,
//     precio:0,
//     nomber:"",
//     subtotal(cantidad:number, precio:number):number{
//       return cantidad * precio
//     }

//  }



   contador(base:number){
      this.suma+=base
      this.orderService.addComanda(this.precio, this.nombreProduct, this.id, this.suma)
   
      // console.log(this.comanda.subtotal(this.orderService.contador, this.precio,))
  }

  constructor(private orderService:OrdersService) { }



}
