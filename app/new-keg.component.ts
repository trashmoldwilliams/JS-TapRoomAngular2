import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Price" type="number" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Alcohol Content" type="number" class="col-sm-8 input-lg" #newAlcohol>
    <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol)">Add</button>
  </div>
    `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newAlcohol: HTMLInputElement){
    var newKeg = new Keg(newName.value, newBrand.value, parseInt(newPrice.value), parseInt(newAlcohol.value), 0);
    this.onSubmitNewKeg.emit(newKeg);
    newName.value = "";
    newBrand.value = "";
    newPrice.value = "";
    newAlcohol.value = "";
  }
}
