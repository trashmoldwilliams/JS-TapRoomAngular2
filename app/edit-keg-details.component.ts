import {Component} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: "edit-keg-details",
  inputs: ['keg'],
  template:`
  <div class="task-form">
    <h3>Edit Description: </h3>
    <input [(ngModel)]='keg.name' class="col-sm-8 input-lg task-form" />
    <input [(ngModel)]='keg.brand' class="col-sm-8 input-lg task-form" />
    <input [(ngModel)]='keg.price' class="col-sm-8 input-lg task-form" />
    <input [(ngModel)]='keg.alcohol' class="col-sm-8 input-lg task-form" />
  </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
