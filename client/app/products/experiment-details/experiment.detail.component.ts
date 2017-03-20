import {Component, Input} from '@angular/core';
import {Products} from '../../common/experiment.model';

@Component({
  selector: 'experiment',
  template: require('./experiment.detail.component.html'),
  styles: [`
    .experiment {
      cursor: pointer;
      outline: 1px lightgray solid;
      padding: 5px;
      margin: 5px;
    }
  `]
})

export class ExperimentDetailComponent {
  @Input() product: Products;

  doExperiment(): void {
    this.product.price += 1;
  };
}
