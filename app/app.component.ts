import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

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
      new Keg("Head Hunter", "Fat Head", 170, 7.5, 2),
      new Keg("Barrel 11", "Brewery 1", 120, 5.9, 3),
      new Keg("Barrel 12", "Brewery 1", 120, 5.9, 4),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
