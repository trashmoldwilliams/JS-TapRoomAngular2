import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
      <div *ngFor="#keg of kegs" (click)="kegWasSelected(keg)"
      [keg.selected]='currentKeg === selectedKeg'>
        <h3>{{ keg.name }}</h3>
        <h3>Brand: {{ keg.brand }}</h3>
        <h3>Price: {{ keg.price }}</h3>
        <h3>Alcohol Content: {{ keg.alcohol }}</h3>
        <h3>Pints: {{ keg.pints }}</h3>
      </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
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
    <h1>Keggerator</h1>
    <keg-list
      ['kegList'] = "kegs"
      (onKegSelect)="KegWasSelected($event)">
    </keg-list>
  <div>
  `
})

export class AppComponent {
public kegs: Keg[];
constructor(){
  this.kegs = [
    new Keg("ipa","widmer",4, 5.6 ),
    new Keg("stout","budweiser", 2, 4.2 ),
  ];
}

kegWasSelected(clickedKeg: Keg): void {
  console.log('parent', clickedKeg);
  }
}
