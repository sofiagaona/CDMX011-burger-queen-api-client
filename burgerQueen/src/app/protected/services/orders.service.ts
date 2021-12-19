import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResponsProducts, Product, Comanda, ToPay } from '../orders/interfaces/interfaces.orders';
import { AuthService } from '../../auth/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {

private _historialClient: string[] = [];
private _historialMenu: string[] = ["Desayuno", "Comida"]
private _baseUrl: string = environment.baseUrl;
public productsMenu: Product[]=[];
public precio:number=0;
public idProduct:string=""
private _comanda: Comanda[]=[];
public subtotales:number=0;
private _toPay:ToPay={
   subTotal:0,
   iva(subtotales){return subtotales * 0.16},
   Total(subtotales, iva){return subtotales + iva}
}
public addSubTotal!:number[];
public  products:Comanda={
  productId:"",
  qty:0,
  precio:0,
  nomber:"",
  subTotal:0
}


get historialClient(){
  return [...this._historialClient]
}

get historialMenu(){
  return [...this._historialMenu]
}

get comanda(){
  
  return [...this._comanda]
}

get toPay(){
  return {...this._toPay}
}

listClient(cliente:string){
    cliente= cliente.trim().toLocaleLowerCase()
    
        this._historialClient.push(cliente);
        this._historialClient=this._historialClient.splice(0,10);
        localStorage.setItem('historialCliente', JSON.stringify(this._historialClient))
    
}
  constructor(private http:HttpClient, private authService: AuthService) { 
    this._historialClient= JSON.parse(localStorage.getItem('historialCliente')! )|| [];
  }

 private createRequestOption(){
   const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authService.user.token}`,
    })
   return headers
 }

  buscarMenu(query:string){
    let options = this.createRequestOption();
     let params = new HttpParams()
        .set('type', `${query.toLocaleLowerCase()}`);
      
    const url = `${this._baseUrl}/products`
    return this.http.get<ResponsProducts>(url,{ headers: options, params: params  })
       .subscribe(resp=>{ 
         this.productsMenu=resp.products;
        
       })
  }

  addComanda(precio:number, nombre:string, id:string, contador:number,subTotal:number){
   if (this._comanda.length ===0){
    this._comanda.push(this.products)
   }

   for(let i=0; this._comanda.length>i;i++){
    
       if(this._comanda[i].productId===id){
        this._comanda[i].qty=contador;
        this._comanda[i].subTotal=subTotal
        this.addToPay()
        return 
      }
     else{
       
      this.products = {
        productId:id,
        qty:contador,
        precio:precio,
        nomber:nombre,
        subTotal:subTotal
      }
      
    }
  }
    this._comanda.push(this.products)
    this.addToPay()
  }

  addToPay(){
    this.addSubTotal = this._comanda.map(element=>{return element.subTotal})
    let subtotales = this.addSubTotal.reduce((a,b)=>{return a+b})
      this._toPay = {
       subTotal:subtotales,
       iva(subTotal){
        let sumaTotal = subTotal * 0.16
        return Math.round(sumaTotal)
       },
       Total(subtotales,iva){
         return subtotales + iva
       }
       
      }

    
     
  }
 
}
