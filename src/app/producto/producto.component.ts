import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'interfaces/product.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  @Input() producto!:Product;

  ngOnInit() : void {   
  }
}
