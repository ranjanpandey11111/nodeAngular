import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'parcel',
  template: require('./products.component.html')
})
export class ProductsComponent implements OnInit{
  title: string = 'products Details';
  body:  string = 'List of all products';
  message: string;

  constructor(public _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
