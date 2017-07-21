import {Component, Input } from "@angular/core";
import {ContentContainer} from "./ContentContainer";

@Component({
  selector: 'group',
  template: `    
  <h3><label>{{context?.label}}</label></h3>
  <div class="indent" *ngFor="let element of elements">
    <element [context]="element"></element>
  </div>
 `
})
export class GroupComponent extends ContentContainer {

  constructor() {
    super('elements');
  }
}
