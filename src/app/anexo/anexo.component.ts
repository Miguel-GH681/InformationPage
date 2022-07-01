import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Product } from 'interfaces/product.interface';

@Component({
  selector: 'app-anexo',
  templateUrl: './anexo.component.html',
  styleUrls: ['./anexo.component.css']
})
export class AnexoComponent implements OnInit {

  showTable = false;
  url:string;
  productId:string;


  constructor(@Inject(DOCUMENT) document : Document){
    this.url = document.location.href;
    this.productId = this.url.substring(this.url.length - 1, this.url.length);
  }

  @Input() productos!:Array<Product>
  productCompared?:Product;
  product?:Product;

  ngOnInit(): void {
  }

  getVersus(option:string){
    this.showTable = true;
    this.productCompared = this.productos.find(element => element.codigoepa == option);
    this.product = this.productos[parseInt(this.productId)];
  }

}
