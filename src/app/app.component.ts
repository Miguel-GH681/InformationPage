import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from 'interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  productId:string;
  url:string;
  producto:Product;
  viewProduct: boolean = true;
  viewAccesories: boolean = false;
  viewExtras:boolean = false;

  constructor(@Inject(DOCUMENT) document : Document){
    this.url = document.location.href;
    this.productId = this.url.substring(this.url.length - 1, this.url.length);
    this.producto = this.productos[parseInt(this.productId)]
  }

  producto01 : Product = {
    nombre: "Calentador Thermo Master",
    color: "Blanco",
    marca: "Thermo Master",
    material: "Plástico",
    voltaje: "220",
    potencia: "10 kw",
    tipouso: "Doméstico",
    precio: 1755.00,
    codigoepa: "24-40-003",
    dimensionEmpaque: "26 x 39 x 13.5",
    corriente: "220v",
    servicios: "1 ducha y 2 lavamanos",
    accesories: {
      pegamento:"Pegamento",
      llaves:"Llaves de media",
      breaker:"Breaker 1/2",
      cable:"Cable #8"
    }
  }

  producto02 : Product = {
    nombre: "Calentador Thermo Master",
    color: "Blanco",
    voltaje: "220",
    marca: "Thermo Master",
    material: "Plástico",
    potencia: "12 kw",
    tipouso: "Doméstico",
    precio: 1799.00,
    codigoepa: "24-40-004",
    dimensionEmpaque: "26 x 39 x 13.5",
    corriente: "220v",
    servicios: "2 ducha y 2 lavamanos",
    accesories: {
      pegamento:"Pegamento",
      llaves:"Llaves de media",
      breaker:"Breaker 1/2",
      cable:"Cable #8"
    }
  }

  producto03 : Product = {
    nombre: "Calentador Titán",
    color: "Blanco hueso",
    voltaje: "220",
    marca: "Titán",
    material: "Plástico",
    potencia: "12 kw",
    tipouso: "Doméstico",
    precio: 1999.00,
    codigoepa: "24-40-010",
    dimensionEmpaque: "25 x 17 x 6",
    corriente: "220v",
    servicios: "2 ducha y 2 lavamanos",
    accesories: {
      pegamento:"Pegamento",
      llaves:"Llaves de media",
      breaker:"Breaker 1/2",
      cable:"Cable #8"
    }
  }

  productos : Array<Product> = [ this.producto01, this.producto02, this.producto03 ];

  ngOnInit(): void {
  }

  changeViews(option: number): void{
    if(option == 0){
      this.viewAccesories = false;
      this.viewExtras = false;
      this.viewProduct = true;
    } else if(option == 1){
      this.viewExtras = false;
      this.viewProduct = false;
      this.viewAccesories = true;
    } else{
      this.viewAccesories = false;
      this.viewProduct = false;
      this.viewExtras = true;
    }
  }

}
