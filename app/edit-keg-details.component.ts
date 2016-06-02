import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="row">
    <div class="keg-form">
      <h3>Edit keg name: </h3>
      <input [(ngModel)]="keg.name" class="col-sm-5 input-lg"/>
      
    </div>
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
