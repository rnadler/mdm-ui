import {Component, Input} from "@angular/core";
import {DataService} from "./data.service";
import {ContentContainer} from "./content.container";

@Component({
  selector: 'sections',
  template: `
  <div class="center">
    <h1>{{title}}</h1>
  </div>
  <div *ngFor="let element of elements">
    <section [context]="element"></section>
  </div>
`
})
export class SectionsComponent  extends ContentContainer {
  private title: string;

  constructor(private dataService: DataService) {
    super(null);
    this.dataService.getJSON('sampleData.json').subscribe(data => {
      this.title = this.context;
      this.setContext(data);
    });
  }
}
