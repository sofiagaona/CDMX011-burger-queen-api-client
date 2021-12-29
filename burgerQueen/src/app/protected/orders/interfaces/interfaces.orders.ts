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
    name:string;
    subTotal:number;
}

export interface ToPay{
    subTotal:number;
    iva(subTotal:number):number;
    Total(subtotal:number, iva:number):number;

}

export interface OrderResponse{

    orders?: Order;
    statusCode?:string;
    message?:string;
       
}


export interface Order{
    userId: IdCurrentUser,
    cliente: string,
    products: Comanda[],
    status: string,
    dateEnry: Date,
    estado: boolean,
    _id: string
}

export interface IdCurrentUser{
    id:string
}

