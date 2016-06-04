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
      new Keg("Stumptown Tart Cherry Saison", "BridgePort", 5, 7, 124, 0),
      new Keg("Rise Up Red India Red Ale", "Hopworks", 4, 6.1, 20, 1),
      new Keg("Head Hunter", "Fat Head", 4, 7.5, 7, 2),
      new Keg("Barrel 11", "Brewery 1", 5, 5.9, 3, 3),
      new Keg("Barrel 12", "Brewery 1", 6, 5.9, 124, 4),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
