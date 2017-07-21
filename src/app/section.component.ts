import {Component, Input, OnInit} from "@angular/core";
import {ContentContainer} from "./ContentContainer";

@Component({
  selector: 'section',
  template: `    
  <h2>{{context?.label}}</h2>
  <div class="indent" *ngFor="let element of elements">
    <group [context]="element"></group>
  </div>
`
})
export class SectionComponent extends ContentContainer {

  constructor() {
    super('groups');
  }
}
