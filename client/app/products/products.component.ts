import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {Products} from '../common/experiment.model';
import {ExperimentsService} from '../common/experiments.service';
import {StateService} from '../common/state.service';
import {ExperimentDetailComponent} from './experiment-details/experiment.detail.component';

@Component({
  selector: 'experiments',
  template: require('./products.component.html'),
  directives: [ExperimentDetailComponent]
})
export class ProductsComponent implements OnInit {
  title: string = 'Showing List of Products';
  body: string = 'This is total products details we are showing';
  message: string;
  products: Products[];

  constructor(
    private _stateService: StateService,
    private _experimentsService: ExperimentsService) {}

  ngOnInit() {
    this.products = this._experimentsService.getExperiments();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
