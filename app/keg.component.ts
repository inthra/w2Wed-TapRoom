import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { SellOnePintComponent } from './sell-one-pint.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [SellOnePintComponent],
  template: `
  <div class="col-sm-3" id="each-keg-block">
    <h4>{{ keg.name }}</h4>
    <ul>
      <li>{{ "Brand: " + keg.brand }}</li>
      <li>{{ "Price: $" + keg.price + " per keg"}}</li>
      <li>{{ "ABV: " + keg.alcoholContent + "%" }}</li>
      <li>{{ "Pint servings: " + keg.pintServings}}
        <sell-one-pint [targetKeg]="keg"></sell-one-pint>
      </li>
    </ul>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
