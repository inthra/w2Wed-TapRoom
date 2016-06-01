import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Tap Room</h1>
      <div *ngFor="#keg of kegs">
        <h3>{{ keg.name }}</h3>
        <ul>
          <li>{{ "Brand: " + keg.brand }}</li>
          <li>{{ "Price: $" + keg.price + " per keg"}}</li>
          <li>{{ "ABV: " + keg.alcoholContent + "%" }}</li>
          <li>{{ "Pint servings: " + keg.pintServings}}</li>
        </ul>
      </div>
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
}

export class Keg {
  public pintServings: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public id: number) {

  }
}
