import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  templateUrl: 'app/edit-keg-details.view.html'
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
