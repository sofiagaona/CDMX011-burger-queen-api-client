export interface ResponsProducts {
    products:Product[];
    
}

export interface Product {
    _id:string;
    name:string;
    price:number;
    image?:string;
    type?:string;
    dateEntry?:Date;
    message?:string;
}

export interface Comanda {
    productId:string;
    qty:number;
    precio:number;
    nomber:string;
    subTotal(precio:number, cantidad:number):number
}

export interface ToPay{
    subTotal:number;
    iva(subTotal:number):number;
    Total(subtotal:number, iva:number):number;

}