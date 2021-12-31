

export interface AuthResponse{
    jwtToken?:string,
    msj?:string,
    name?:string,
    roles?:Roles,
    id?:string;
    ok:boolean,
}

export interface User{
    name:string;
    token:string;
    id:string;
    roles?:Roles;
}

export interface Roles{
    admin?:boolean;
    cocina?:boolean;
    mesero?:boolean;
    cajas?:boolean;
}