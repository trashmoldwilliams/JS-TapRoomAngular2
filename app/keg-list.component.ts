import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [EditKegDetailsComponent, NewKegComponent],
  template: `
      <div *ngFor="#keg of kegList" (click)="kegClicked(keg)"
      [class.selected]='keg === selectedKeg'>
        <h3>{{ keg.name }}</h3>
        <h3>Brand: {{ keg.brand }}</h3>
        <h3>Price: {{ keg.price }}</h3>
        <h3>Alcohol Content: {{ keg.alcohol }}</h3>
        <h3>Pints: {{ keg.pints }}</h3>
        <edit-keg-details *ngIf='keg === selectedKeg' [keg]="selectedKeg">
        </edit-keg-details>
      </div>
      <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
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
  createKeg(tempKeg: Keg): void {
    this.kegList.push(new Keg(tempKeg.name, tempKeg.brand, tempKeg.price, tempKeg.alcohol, this.kegList.length)
    );
  }
}
