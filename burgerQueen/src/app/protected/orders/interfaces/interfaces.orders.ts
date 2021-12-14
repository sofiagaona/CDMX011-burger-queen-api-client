export interface ResponsProducts {
    products:Product[];
    
}

export interface Product {
    _id?:string;
    name?:string;
    price?:number;
    image?:string;
    type?:string;
    dateEntry?:Date;
    message?:string;
}

