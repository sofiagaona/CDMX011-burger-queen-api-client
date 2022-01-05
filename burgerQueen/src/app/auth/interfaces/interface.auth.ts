

export interface AuthResponse{
    jwtToken?:string,
    msj?:string,
    name?:string,
    roles?:Roles,
    _id?:string;
    ok:boolean,
}

export interface User{
    name:string;
    token:string;
    _id:string;
    roles?:Roles;
    email?:string;
}

export interface Roles{
    admin?:boolean;
    cocina?:boolean;
    mesero?:boolean;
    cajas?:boolean;
}