import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3>{{ keg.name }}</h3>
  <ul>
    <li>{{ "Brand: " + keg.brand }}</li>
    <li>{{ "Price: $" + keg.price + " per keg"}}</li>
    <li>{{ "ABV: " + keg.alcoholContent + "%" }}</li>
    <li>{{ "Pint servings: " + keg.pintServings}}</li>
  </ul>
  `
})
export class KegComponent {
  public keg: Keg;
}
