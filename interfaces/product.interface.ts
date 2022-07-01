export interface Product{
    nombre:string,
    marca: string,
    material: string,
    aplicacion?: string,
    modelo?: string,
    tipodrenaje?: string,
    tipodescarga?: string,
    color: string,
    alturaasiento?: string,
    dimensionEmpaque: string
    potencia?: string,
    corriente?: string,
    tipouso?: string,
    voltaje?: string,
    precio: number,
    codigoepa:string,
    servicios?:string,
    accesories:{
        pegamento:string,
        llaves:string,
        breaker:string,
        cable:string
    }
}