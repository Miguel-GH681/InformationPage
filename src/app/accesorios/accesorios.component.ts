import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'interfaces/product.interface';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {

  constructor() { }

  @Input() accesoriesProduct!:Product;

  ngOnInit(): void {
  }
}
