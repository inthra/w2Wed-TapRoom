import { Component, EventEmitter } from 'angular2/core';

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

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"
    (click)="kegSelected(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegSelected(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
}

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Tap Room</h1>

      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>

    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Stumptown Tart Cherry Saison", "BridgePort", 175, 7, 0),
      new Keg("Rise Up Red India Red Ale", "Hopworks", 180, 6.1, 1),
      new Keg("Head Hunter", "Fat Head", 170, 7.5, 2)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}

export class Keg {
  public pintServings: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public id: number) {

  }
}
