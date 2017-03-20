import {Injectable} from '@angular/core';
import {Products} from './experiment.model';

@Injectable()
export class ExperimentsService {
  private experiments: Products[] = [
    {name: 'Shirt', description: 'Nice Shirt dude', price:5643,brand:"Raymonds"},
    {name: 'Jeans', description: 'Enjoy Jeans All time', price:4430,brand:"Reebook"},
    {name: 'shoes', description: 'A great soues u like most', price:494,brand:"Sparks"},
    {name: 'Micromax-UNIT2', description: 'Hiegh Performance phone', price:4533,brand:"Micromax"}
  ];

  getExperiments(): Products[] {
    return this.experiments;
  };
}
