import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

private _historialClient: string[] = [];


get historialClient(){
  return [...this._historialClient]
}

listClient(cliente:string){
    cliente= cliente.trim().toLocaleLowerCase()
    if(!this._historialClient.includes(cliente)){
        this._historialClient.push(cliente);
        this._historialClient=this._historialClient.splice(0,10);
        // localStorage.setItem('historial', JSON.stringify(this._historialClient))
    }
}
  constructor() { }
}
