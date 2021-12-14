

export interface AuthResponse{
    jwtToken?:string,
    msj?:string,
    name?:string,
    roles?:Roles,
    ok:boolean,
}

export interface User{
    name:string;
    token:string;
    roles?:Roles;
}

export interface Roles{
    admin?:boolean;
    cocina?:boolean;
    mesero?:boolean;
    cajas?:boolean;
}