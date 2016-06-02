import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { LowPipe } from './low.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [LowPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All Kegs</option>
    <option value="full">Show Full Level Kegs</option>
    <option value="high">Show High Level Kegs</option>
    <option value="low">Show Low Level Kegs</option>
  </select>

  <div class="row">
    <keg-display *ngFor="#currentKeg of kegList | pintServings:filterLow"
      (click)="kegSelected(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
  </div>

  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>

  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegSelected(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string): void {
    this.kegList.push(
      new Keg(name, "Brewery", 110, 5, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
}
