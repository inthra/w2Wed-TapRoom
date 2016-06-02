import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'sell-one-pint',
  inputs: ['targetKeg'],
  template: `
  <button (click)="sellPint()" class="btn btn-default sell-button">Sell</button>
  `
})
export class SellOnePintComponent {
  public targetKeg: Keg;
  sellPint(): void {
    this.targetKeg.pintServings = this.targetKeg.pintServings - 1;
  }
}
