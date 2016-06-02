import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="row">
    <div class="keg-form">
      <h3>Create new keg: </h3>
      <input placeholder="Name" class="col-sm-5 input-lg" #newKegName/>
      <button (click)="addKeg(newKegName)" class="btn-success btn-lg add-button">Add</button>
    </div>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userKegName: HTMLInputElement){
    this.onSubmitNewKeg.emit(userKegName.value);
    userKegName.value = "";
  }
}
