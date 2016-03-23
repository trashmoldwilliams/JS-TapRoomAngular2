import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Keggerator</h1>
      <div *ngFor="#keg of kegs" (click)="kegWasSelected(keg)">
        <h3>{{ keg.name }}</h3>
        <h3>Brand: {{ keg.brand }}</h3>
        <h3>Price: {{ keg.price }}</h3>
        <h3>Alcohol Content: {{ keg.alcohol }}</h3>
        <h3>Pints: {{ keg.pints }}</h3>
      </div>
    </div>
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
