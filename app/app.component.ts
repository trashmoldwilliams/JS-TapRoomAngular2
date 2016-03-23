import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';

import { Keg } from './keg.model';


@Component({
  selector: 'my-app',
  directives: [KegListComponent, EditKegDetailsComponent],
  template: `
  <div class="container">
    <h1>Keggerator</h1>
    <keg-list
      [kegList] = "kegs"
      (onKegSelect)="kegWasSelected($event)">
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
