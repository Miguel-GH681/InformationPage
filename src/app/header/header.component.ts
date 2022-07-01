import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() optionView = new EventEmitter<number>();

  selectedView(option:number): void{
    this.optionView.emit(option)
  }

  ngOnInit(): void {
  }

}
